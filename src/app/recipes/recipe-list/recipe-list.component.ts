import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Bolo", "This is a Cake",  "https://www.bbcgoodfood.com/sites/default/files/styles/category_retina/public/chocolate-avocado-cake.jpg?itok=E2eWE_Dx"),
    new Recipe("Tapioca", "This is a Tapioca",  "http://cevisa.org.br/blog/wp-content/uploads/2015/10/tapioca.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
