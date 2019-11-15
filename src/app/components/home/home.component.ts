import { Component, OnInit } from '@angular/core';
import { BarService } from '../../bar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private alcFilters: any;
  private alcFiltersIngredients: any;
  private alcCategories: any;
  private alcGlasses: any;
  private filterDrinks: any;
  private cocktailDetail: any;
  private obj: any;

  constructor(private bar: BarService ) { 
  this.alcFilters = [];
  this.alcFiltersIngredients = [];
  this.alcCategories = [];
  this.alcGlasses = [];
  this.filterDrinks = [];
  this.cocktailDetail = [];
  this.obj = {};
}

  ngOnInit() {
   this.getFilter();
   this.getIngredients();
   this.getCategory();
   this.getGlasses();
  }

  getFilter(): void{
    this.bar.list_alcoholic_filter().subscribe((res)=>{
      this.obj = res;
      if(this.obj.hasOwnProperty('drinks')){
       this.alcFilters = this.obj['drinks'];
      }
     })
  }

  getIngredients(): void{
    this.bar.list_ingredients().subscribe((res)=>{
      this.obj = res;
      if(this.obj.hasOwnProperty('drinks')){
       this.alcFiltersIngredients = this.obj['drinks'];
      }
     })
  }

  getCategory(): void{
    this.bar.list_categories().subscribe((res)=>{
      this.obj = res;
      if(this.obj.hasOwnProperty('drinks')){
       this.alcCategories = this.obj['drinks'];
      }
     })
  }

  getGlasses(): void{
    this.bar.list_glasses().subscribe((res)=>{
      this.obj = res;
      if(this.obj.hasOwnProperty('drinks')){
       this.alcGlasses = this.obj['drinks'];
      }
     })
  }

  getFilterDrinks(filter : string){
    this.bar.filter_by_alcoholic(filter).subscribe((res)=>{
      this.obj = res;
      if(this.obj.hasOwnProperty('drinks')){
       this.filterDrinks = this.obj['drinks'];
      }
     })
  }

  getCategoryDrinks(category : string){
    this.bar.filter_by_category(category).subscribe((res)=>{
      this.obj = res;
      if(this.obj.hasOwnProperty('drinks')){
       this.filterDrinks = this.obj['drinks'];
      }
     }) 
  }

  getIngredientDrinks(ingredient : string){
    this.bar.search_by_ingredients(ingredient).subscribe((res)=>{
      this.obj = res;
      if(this.obj.hasOwnProperty('drinks')){
       this.filterDrinks = this.obj['drinks'];
      }
     }) 
  }
  
  getCocktailDetails(id: number): void{
    this.bar.lookup_cocktail_details(id).subscribe((res)=>{
      this.obj = res;
      if(this.obj.hasOwnProperty('drinks')){
       this.cocktailDetail = this.obj['drinks'];
       console.log(this.cocktailDetail);
      }
     }) 
  }
}
