import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchWord:string="";
  stopshow:boolean = false;
  goSearch(word:string){
    this.searchWord = word;
  }
}
