import {Ingredient} from "./Ingredient";

export interface IngredientSection {
  readonly title: string
  readonly ingredients: Ingredient[]
}
