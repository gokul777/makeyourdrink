import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public logo = require("../../assets/images/drinklogo.png");
  constructor() { }

  ngOnInit() {
  }

}
