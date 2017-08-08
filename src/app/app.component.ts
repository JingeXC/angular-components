import { Component ,AfterViewInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
	searchWord:string;
	goSearchWord:string;
  searhInput:FormControl=new FormControl();

  ngAfterViewInit(){
  	this.searhInput.valueChanges
  	.debounceTime(500)
  	.subscribe((value)=>{
  		this.goSearchWord = value;
  	})
  }

  goSearch(word:string){
  	this.searchWord = word;
  }
}
