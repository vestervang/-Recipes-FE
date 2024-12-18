import {Author} from "./Author";
import {IngredientSection} from "./IngredientSection";
import {StepSection} from "./StepSection";

export interface Recipe {
  title: string;
  author: Author;
  createdAt: Date;
  image: string | null;
  prep_time: number;
  defaultServings: number;
  ingredientList: IngredientSection[]
  steps: StepSection[]
}
