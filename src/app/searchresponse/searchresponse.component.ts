import { Component, OnInit, Input, Output ,EventEmitter , OnChanges ,SimpleChanges} from '@angular/core';


@Component({
  selector: 'app-searchresponse',
  templateUrl: './searchresponse.component.html',
  styleUrls: ['./searchresponse.component.css']
})
export class SearchresponseComponent implements OnInit , OnChanges {

  @Input()
  searchWord:string;

  @Output()
  selectWord:EventEmitter<any> = new EventEmitter();

  private staticData:Array<any>=[];
  private showData:Array<any>=[];
  constructor() { 
    this.staticData=[
      'jake',
      'joke',
      'jack',
      'jane',
      'jackier',
      'alen',
      'bob'
    ]
  }
  ngOnChanges(changes:SimpleChanges):void{
    if(this.searchWord == "" || this.searchWord ){
      this.showData=this.searchFoArray(changes.searchWord.currentValue);
      console.dir(this.showData);
    }
  }
  select(name:string){
    this.selectWord.emit(name);
    this.showData = [];
  }
  searchFoArray(word:string):Array<any>{
    let tempArr:Array<any>=[];
    for(let item of this.staticData){
      for(let i = 0;i<word.length;i++){
        if(item[i]== word[i]){
          tempArr.push(item);
        }
      }
    }
    return tempArr;
  }
  ngOnInit() {
    
  }

}
