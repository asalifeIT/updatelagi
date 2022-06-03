import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export interface User{
   [x: string]: any; 
  token:any;
  name:any;
  role:string;
  permissions:string[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private currenUser:BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() {
  this.loadUser();
   }
   loadUser(){
    localStorage.get({key:TOKEN_KEY}).then(res => {
      if (res.value){
        this.currentUser.next(JSON.parse(res.value));
      } else {
        this.currentUser.next(false);
      }
    });
   }
}

signin()




