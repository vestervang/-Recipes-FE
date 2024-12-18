import {Unit} from "../services/unit-converter.service";

export interface StepSection {
  title: string
  steps: Step[]
}

export interface Step {
  text: string,
  ingredients: StepIngredient[]
}

export interface StepIngredient {
  amount: number,
  amountInGrams?: number,
  unit: Unit,
  name: string,
}
