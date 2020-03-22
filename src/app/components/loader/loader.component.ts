import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  public loader = require ("../../assets/images/loader.gif");
  constructor() { }

  ngOnInit() {
  }

}
