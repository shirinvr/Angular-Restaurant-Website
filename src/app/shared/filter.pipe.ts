import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from 'src/modals/recipe';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(recipes: any[], term: string, category: string): any[] {
    let filteredRecipes = recipes;
    
    // Apply the "filter by term" logic
    if (term) {
      filteredRecipes = filteredRecipes.filter(recipe => recipe.name.toLowerCase().includes(term.toLowerCase()));
    }
    
    // Apply the "filter by category" logic
    if (category) {
      filteredRecipes = filteredRecipes.filter(recipe => recipe.category === category);
    }
    
    // Return the filtered recipes
    return filteredRecipes;
  }
}