import { Component ,AfterViewInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
	searchWord:string;//输入的搜索文字
	goSearchWord:string;//输出给子组件的文字
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
