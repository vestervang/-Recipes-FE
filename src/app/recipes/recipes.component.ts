import {Component, inject, signal, TemplateRef, ViewChild} from '@angular/core';
import {AsyncPipe, DatePipe, DecimalPipe} from "@angular/common";
import {Ingredient} from "../models/Ingredient";
import {UnitConverterService} from "../services/unit-converter.service";
import {RecipeService} from "./recipe.service";
import {combineLatest, map, tap} from "rxjs";
import {IngredientSection} from "../models/IngredientSection";
import {toObservable} from '@angular/core/rxjs-interop';
import {RouterLink} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Recipe} from "../models/Recipe";
import {StepSection} from "../models/StepSection";
import {CheckboxModule} from "primeng/checkbox";
import {DialogModule} from "primeng/dialog";
import {InputNumberModule} from "primeng/inputnumber";

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [
    DatePipe,
    DecimalPipe,
    AsyncPipe,
    RouterLink,
    FormsModule,
    CheckboxModule,
    ReactiveFormsModule,
    DialogModule,
    InputNumberModule,
  ],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss'
})
export class RecipesComponent {
  @ViewChild("groceryList") groceryListElement!: TemplateRef<any>;

  // readonly dialog = inject(MatDialog);
  readonly unitConverterService = inject(UnitConverterService);
  readonly recipeService = inject(RecipeService);
  readonly groceryList$ = signal<Ingredient[]>([]);
  serving = signal(0);
  serving$ = toObservable(this.serving);
  showGroceryList = false;

  constructor() {
    this.serving$.subscribe(val => console.log(val));
  }

  private recipeOriginal$ = this.recipeService
    .getRecipe("random-id")
    .pipe(
      tap(recipe => {
        this.serving.set(recipe.defaultServings);
      }),
      map(recipe => {
        recipe.ingredientList = this.convertIngredientsAmountToGrams(recipe.ingredientList);
        recipe.steps = this.convertStepIngredientsToGram(recipe.steps);
        return recipe;
      })
    );

  recipe$ = combineLatest(
    this.recipeOriginal$,
    this.serving$
  ).pipe(
    map(([recipe, servings]) => {
      console.log('recipe', recipe);
      return this.multiplyIngredients(recipe, servings);
    }),
    tap(recipe => {
      this.groceryList$.set(this.createGroceryList$(recipe.ingredientList));
    })
  );


  openGroceryList(): void {
    this.showGroceryList = !this.showGroceryList;

  //   this.dialog.open(this.groceryListElement, {
  //     data: this.groceryList$,
  //   });
  }

  private createGroceryList$(ingredientSections: IngredientSection[]) {
    const ingredients: Ingredient[] = [];

    for (const section of ingredientSections) {
      for (const ingredient of section.ingredients) {
        ingredients.push({...ingredient});
      }
    }

    return this.joinSimilarIngredients(ingredients);
  }

  private multiplyIngredients(recipe: Recipe, servings: number): Recipe {
    const multiplier = servings <= 0 ? 0 : servings / recipe.defaultServings;

    const newIngredientList = recipe.ingredientList.map(ingredientSection => {
      return {
        ...ingredientSection,
        ingredients: ingredientSection.ingredients.map(ingredient => {
          return {
            amount: ingredient.amount * multiplier,
            unit: ingredient.unit,
            name: ingredient.name,
            calories: ingredient.calories,
            amountInGrams: (ingredient.amountInGrams ?? 0) * multiplier,
            nutrition: ingredient.nutrition
          }
        })
      }
    });

    const newSteps = recipe.steps.map(section => {
      return {
        ...section,
        steps: section.steps.map(step => {
          return {
            ...step,
            ingredients: step.ingredients.map(ingredient => {
              return {
                amount: ingredient.amount * multiplier,
                unit: ingredient.unit,
                name: ingredient.name,
                amountInGrams: (ingredient.amountInGrams ?? 0) * multiplier,
              }
            })
          }
        })
      }
    })

    return {
      ...recipe,
      ingredientList: newIngredientList,
      steps: newSteps,
    }
  }

  toggleDone(event: any) {
    let target = event.originalTarget as HTMLElement;

    if (event.originalTarget.tagName != 'LI') {
      target = event.originalTarget.offsetParent as HTMLElement;
    }

    target.classList.toggle('done');
  }

  private joinSimilarIngredients(ingredients: any[]): Ingredient[] {
    let result: any = {};

    for (let ingredient of ingredients) {
      let something = result[ingredient.name];

      if (!something) {
        result[ingredient.name] = ingredient;
        continue;
      }

      result[ingredient.name] = this.joinIngredients(something, ingredient);
    }

    return Object.values(result);
  }

  private convertIngredientsAmountToGrams(ingredientSections: IngredientSection[]): IngredientSection[] {
    for (const section of ingredientSections) {
      for (const ingredientIndex in section.ingredients) {
        section.ingredients[ingredientIndex] = {
          ...section.ingredients[ingredientIndex],
          amountInGrams: this.unitConverterService.convert(section.ingredients[ingredientIndex].amount, section.ingredients[ingredientIndex].unit, 'g')
        }
      }
    }

    return ingredientSections;
  }

  private convertStepIngredientsToGram(stepSections: StepSection[]) {
    for (const stepSection of stepSections) {
      for (const step of stepSection.steps) {
        step.ingredients = step.ingredients.map(ingredient => {
          return {
            ...ingredient,
            amountInGrams: this.unitConverterService.convert(ingredient.amount, ingredient.unit, 'g')
          }
        })
      }
    }
    return stepSections;
  }

  joinIngredients(ingredient1: Ingredient, ingredient2: Ingredient): Ingredient {
    return {
      amount: ingredient1.amount + ingredient2.amount,
      calories: ingredient1.calories,
      amountInGrams: (ingredient1.amountInGrams ?? 0) + (ingredient2.amountInGrams ?? 0),
      unit: ingredient1.unit,
      name: ingredient1.name,
      nutrition: ingredient1.nutrition
    }
  }
}
