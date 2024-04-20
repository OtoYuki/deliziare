import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss'],
})
export class RecipeFormComponent implements OnInit {
  recipeForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    ingredients: new FormControl(''),
    instructions: new FormControl(''),
    nutritionalFacts: new FormGroup({
      calories: new FormControl(''),
      protein: new FormControl(''),
      carbs: new FormControl(''),
      fat: new FormControl(''),
    }),
  });

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.recipeForm.value);
  }
}
