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
  private obj: any;

  constructor(private bar: BarService ) { 
  this.alcFilters = [];
  this.obj = {};
}

  ngOnInit() {
   this.getFilter();
   this.getIngredients();
   this.getCategory();
   this.getGlasses();
  }

  getFilter(){
    this.bar.list_alcoholic_filter().subscribe((res)=>{
      this.obj = res;
      if(this.obj.hasOwnProperty('drinks')){
       this.alcFilters = this.obj['drinks'];
      }
     })
  }

  getIngredients(){
    this.bar.list_ingredients().subscribe((res)=>{
      this.obj = res;
      if(this.obj.hasOwnProperty('drinks')){
       this.alcFiltersIngredients = this.obj['drinks'];
      }
     })
  }

  getCategory(){
    this.bar.list_categories().subscribe((res)=>{
      this.obj = res;
      if(this.obj.hasOwnProperty('drinks')){
       this.alcCategories = this.obj['drinks'];
      }
     })
  }

  getGlasses(){
    this.bar.list_glasses().subscribe((res)=>{
      this.obj = res;
      if(this.obj.hasOwnProperty('drinks')){
       this.alcGlasses = this.obj['drinks'];
      }
     })
  }

}
