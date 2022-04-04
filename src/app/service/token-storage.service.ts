import {Injectable} from '@angular/core';

const TOKEN_KEY = "auth-token";
const USER_KEY = "auth-user";

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {


  constructor() {
  }

  public saveToken(token: string): void {
    let sessionStorage = window.sessionStorage;
    sessionStorage.removeItem(TOKEN_KEY)
    sessionStorage.setItem(TOKEN_KEY, token)
  }

  public getToken(): string {
    return <string>sessionStorage.getItem(TOKEN_KEY)
  }

  public saveUser(user:any): void {
    window.sessionStorage.removeItem(USER_KEY)
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user))
  }

  public getUser(): any {
    return JSON.parse(<string>sessionStorage.getItem(USER_KEY))
  }

  public logOut(): void {
    window.sessionStorage.clear();
    window.location.reload();
  }

}
