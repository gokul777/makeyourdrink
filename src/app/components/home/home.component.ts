import { Component, OnInit } from "@angular/core";
import { BarService } from "../../bar.service";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DialogComponent } from "../dialog/dialog.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public background = require("../../assets/images/d1.jpg");

  private alcFilters: any;
  private alcFiltersIngredients: any;
  private alcCategories: any;
  private alcGlasses: any;
  private cocktailDetails: any;
  private cocktailDetail: any;
  private obj: any;
  public selection: string;
  public filterDrinks: any;
  public loader: boolean;

  constructor(private _bar: BarService, private dialog: MatDialog) {
    this.alcFilters = [];
    this.alcFiltersIngredients = [];
    this.alcCategories = [];
    this.alcGlasses = [];
    this.filterDrinks = [];
    this.cocktailDetails = [];
    this.cocktailDetail = {};
    this.obj = {};
    this.selection = "";
  }

  ngOnInit() {
    this.getFilter();
    this.getIngredients();
    this.getCategory();
    this.getGlasses();
  }

  /**
   * Choose the drink based on selection
   * @param selection
   */
  getSelection(selection: string): void {
    this.selection = selection;
  }

  /**
   * Get the alcoholic filters
   */
  getFilter(): void {
    this._bar.list_alcoholic_filter().subscribe(res => {
      this.obj = res;
      if (this.obj.hasOwnProperty("drinks")) {
        this.alcFilters = this.obj["drinks"];
      }
    });
  }

  /**
   * Get the list of ingredients
   */
  getIngredients(): void {
    this._bar.list_ingredients().subscribe(res => {
      this.obj = res;
      if (this.obj.hasOwnProperty("drinks")) {
        this.alcFiltersIngredients = this.obj["drinks"];
      }
    });
  }

  /**
   * Get the list of categories
   */
  getCategory(): void {
    this._bar.list_categories().subscribe(res => {
      this.obj = res;
      if (this.obj.hasOwnProperty("drinks")) {
        this.alcCategories = this.obj["drinks"];
      }
    });
  }

  /**
   * Get the list of glasses
   */
  getGlasses(): void {
    this._bar.list_glasses().subscribe(res => {
      this.obj = res;
      if (this.obj.hasOwnProperty("drinks")) {
        this.alcGlasses = this.obj["drinks"];
      }
    });
  }

  /**
   * Get the drinks based on filter
   * @param filter
   */
  getFilterDrinks(filter: string) {
    this.loader = true;
    this._bar.filter_by_alcoholic(filter).subscribe(res => {
      this.obj = res;
      if (this.obj.hasOwnProperty("drinks")) {
        setTimeout(() => {
          this.filterDrinks = this.obj["drinks"];
          this.loader = false;
        }, 2000);
      }
    });
  }

  /**
   * Get the drinks based on categoreis
   * @param category
   */
  getCategoryDrinks(category: string) {
    this.loader = true;
    this._bar.filter_by_category(category).subscribe(res => {
      this.obj = res;
      if (this.obj.hasOwnProperty("drinks")) {
        setTimeout(() => {
          this.filterDrinks = this.obj["drinks"];
          this.loader = false;
        }, 2000);
      }
    });
  }

  /**
   *
   * @param ingredient Get the drinks based on the ingredients
   */
  getIngredientDrinks(ingredient: string) {
    this.loader = true;
    this._bar.search_by_ingredients(ingredient).subscribe(res => {
      this.obj = res;
      if (this.obj.hasOwnProperty("drinks")) {
        setTimeout(() => {
          this.filterDrinks = this.obj["drinks"];
          this.loader = false;
        }, 2000);
      }
    });
  }

  /**
   * Get the cocktail details based on id
   * @param id
   */
  getCocktailDetails(id: number): void {
    this.loader = true;
    this._bar.lookup_cocktail_details(id).subscribe(res => {
      this.obj = res;
      if (this.obj.hasOwnProperty("drinks")) {
        setTimeout(() => {
          this.cocktailDetails = this.obj["drinks"];
          this.cocktailDetail = this.cocktailDetails[0];
          //dialog
          const dialogConfig = new MatDialogConfig();
          dialogConfig.disableClose = true;
          dialogConfig.autoFocus = true;
          dialogConfig.width = "65%";
          dialogConfig.data = this.cocktailDetail;
          this.dialog.open(DialogComponent, dialogConfig);
          this.loader = false;
        }, 2000);
      }
    });
  }
}
