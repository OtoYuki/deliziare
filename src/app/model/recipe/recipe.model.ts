export interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  nutritionalFacts?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}
