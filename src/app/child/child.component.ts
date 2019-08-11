import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  //Using Input() decorator intercept properties
  @Input() loggedIn : boolean;
  //Default Initialization of property, there for no need to 'property bind' in html.
  //Example this step is optional : [loggedIn]="userLoggedIn"
  @Input('userActive') userStatus  = true; 
  
  private _taskAccess : boolean;
  message : string;
  //parent child interaction with getter and Setter method.
  //Intercept property using parent component.
  get taskAccess() : boolean {
    return this._taskAccess;
  }

  @Input()
  set taskAccess(value :boolean){
    this._taskAccess = value;
    if(value == true){
      this.message = 'Welcome Access Granted!';
    }else{
      this.message = 'Access denied!';
    }
  } 
  
  constructor() { }

  ngOnInit() {
  }

}
