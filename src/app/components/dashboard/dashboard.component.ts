import { Component, OnInit } from '@angular/core';
import { BarService } from '../../bar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public logo = require("../../assets/images/drinklogo.png");
  public dark_theme: any =false;

  constructor(private _bar: BarService) { }

  ngOnInit() {
  }

  toggleTheme(){
    this.dark_theme=!this.dark_theme;
    console.log(this.dark_theme);
    this._bar.setDarkTheme(this.dark_theme);
  }
}
