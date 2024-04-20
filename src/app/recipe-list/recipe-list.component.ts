import { Component, OnInit } from '@angular/core';
import { Recipe } from '../model/recipe/recipe.model';
import { RecipeService } from '../services/recipe.service';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipes = [
      {
        id: 1,
        name: 'Chicken Biryani',
        description:
          'Chicken Biryani is a delicious savory rice dish that is loaded with spicy marinated chicken, caramelized onions, and flavorful saffron rice.',
        ingredients: ['Chicken', 'Rice', 'Spices'],
        instructions: ['Fry the chicken', 'Cook the rice', 'Mix them together'],
        nutritionalFacts: {
          calories: 200,
          protein: 10,
          carbs: 20,
          fat: 5,
        },
      },
      {
        id: 2,
        name: 'Cheese Burger',
        description:
          'Cheese Burger is a classic American dish that is loved by people of all ages.',
        ingredients: ['Bun', 'Cheese', 'Patty'],
        instructions: ['Grill the patty', 'Assemble the burger', 'Serve hot'],
        nutritionalFacts: {
          calories: 300,
          protein: 15,
          carbs: 25,
          fat: 10,
        },
      },
      {
        id: 3,
        name: 'Pasta Carbonara',
        description:
          'Pasta Carbonara is a classic Italian dish that is made with pasta, eggs, cheese, and bacon.',
        ingredients: ['Pasta', 'Eggs', 'Cheese', 'Bacon'],
        instructions: [
          'Cook the pasta',
          'Mix the eggs and cheese',
          'Add the bacon',
        ],
        nutritionalFacts: {
          calories: 400,
          protein: 20,
          carbs: 30,
          fat: 15,
        },
      },
      {
        id: 4,
        name: 'Vegetable Stir Fry',
        description:
          'Vegetable Stir Fry is a healthy and delicious dish that is made with a variety of vegetables and sauces.',
        ingredients: ['Vegetables', 'Sauces'],
        instructions: ['Chop the vegetables', 'Stir fry them in a pan'],
        nutritionalFacts: {
          calories: 150,
          protein: 5,
          carbs: 15,
          fat: 5,
        },
      },
    ];
  }
}
