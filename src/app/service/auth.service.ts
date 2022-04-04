import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const AUTH_API = 'http://localhost:9191/api/auth/'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  public login(user: any): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: user.username,
      password: user.password
    });
  }

  public registry(user: any): Observable<any>{
   return  this.http.post(AUTH_API + 'signup',{
      email: user.email,
      name: user.name,
      username: user.username,
      password: user.password,
      conformPassword: user.conformPassword
    })
  }
}
