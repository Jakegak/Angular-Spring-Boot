import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationServiceService {

  constructor() {}

  authenticate(username, password){
    console.log('before '+ this.isUserLogdedIn())
    if(username==='Jake' && password==='Gakunga123$'){
      sessionStorage.setItem('authenticateUser', username)
      console.log('after '+ this.isUserLogdedIn())
      return true
    }
    else{
      return false
    }
  }
  isUserLogdedIn(){
    let user = sessionStorage.getItem('authenticateUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticateUser')
  }
}
