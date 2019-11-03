import { Component, OnInit } from '@angular/core';
import { BarService } from './bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit  {
  title = 'makeyourdrink';
constructor(private bar: BarService ){
  
}
ngOnInit(): void {
  this.bar.list_categories().subscribe((res)=>{
    console.log(res);
    //TODO 
  })
}

}
