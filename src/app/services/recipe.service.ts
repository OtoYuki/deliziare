import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private localStorageKey = 'recipes';

  getRecipes(): Recipe[] {
    const recipesJson = localStorage.getItem(this.localStorageKey);
    return recipesJson ? JSON.parse(recipesJson) : [];
  }

  getRecipeById(id: number): Recipe | null {
    const recipes = this.getRecipes();
    return recipes.find((recipe) => recipe.id === id) || null;
  }

  addRecipe(recipe: Recipe): void {
    const recipes = this.getRecipes();
    recipes.push(recipe);
    localStorage.setItem(this.localStorageKey, JSON.stringify(recipes));
  }

  updateRecipe(updatedRecipe: Recipe): void {
    let recipes = this.getRecipes();
    recipes = recipes.map((recipe) =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    localStorage.setItem(this.localStorageKey, JSON.stringify(recipes));
  }

  deleteRecipe(id: number): void {
    let recipes = this.getRecipes();
    recipes = recipes.filter((recipe) => recipe.id !== id);
    localStorage.setItem(this.localStorageKey, JSON.stringify(recipes));
  }
}
