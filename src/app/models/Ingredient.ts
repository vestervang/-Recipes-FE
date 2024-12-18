import {Nutrition} from "./Nutrition";

export interface Ingredient{
  readonly amount: number;
  readonly unit: string;
  readonly name: string;
  readonly calories: number;
  readonly amountInGrams?: number;
  readonly nutrition: Nutrition[]
}
