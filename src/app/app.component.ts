import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-project';
  user_name: any;
  displayVal = '';
  
  value = '';
  userlist:any;

  constructor(private router:Router) {
    this.userlist=[];

  }

  userName(val: any) {
    console.warn(val)
    this.displayVal = val
  }
  myfunction() {
    this.userlist.push(this.value);
    this.value='';
  }
  ondelete(userno: any){
    this.userlist.splice(userno, 1)
  }
  navigate_h(){
    this.router.navigate(['/home'])
  }
  navigate_p(){
    this.router.navigate(['/products'])
  }

}

