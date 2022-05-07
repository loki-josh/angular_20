import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-project';
  user:any;
  showMassage:any;
  isboolian:boolean=true;
  attributedirectives:any;
  objectarray:any
  objectarray1:any;

  constructor(){
    this.objectarray = ["lokesh","rajesh","rakesh","suresh","ramesh","ganesh"]
    this.objectarray1= [{name:"john", age:"23"},{name:"kishor",age :"30"},{name:"john", age:"23"}]
  }
  myfucntion(envent:any){
    window.alert("login successfull")
    this.showMassage=true;
  }
}

