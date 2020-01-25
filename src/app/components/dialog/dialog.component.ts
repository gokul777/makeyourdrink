import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.css"]
})
export class DialogComponent implements OnInit {
  private ingredient: any;
  public drink: any;

  constructor(
    private _dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.ingredient = data;
    this.drink = {};
  }

  ngOnInit() {
    this.modifyIngredient();
  }
/**
 * Function to modify the dialog content
 */
  modifyIngredient(): void {
    let contents = [];
    let item = {};
    this.drink["name"] = this.ingredient.strDrink;
    this.drink["category"] = this.ingredient.strCategory;
    this.drink["glass"] = this.ingredient.strGlass;
    this.drink["alcoholic"] = this.ingredient.strAlcoholic;
    this.drink["mix"] = this.ingredient.strInstructions;
 
     for (let i = 1; i <= 20; i++) {
      let keys = Object.keys(this.ingredient);
       if(keys.includes("strIngredient"+i)){
       if(this.ingredient["strIngredient"+i]!=null){
       item['item'] = this.ingredient["strIngredient"+i];
       item['qty'] = this.ingredient['strMeasure'+i];
       contents = [...contents, item];
       item ={};
       }
       } 
    }
    this.drink["ingredients"] = contents;
  }

/**
 * close dialog
 */
  close() {
    this._dialogRef.close();
  }
}
