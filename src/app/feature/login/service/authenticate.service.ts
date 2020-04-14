import { Injectable } from '@angular/core';
import { Credential } from '../model/credential';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) { }

  loginUser(credential: Credential): Observable<any> {
    return this.http.post<Credential>(`${environment.apiBaseUrl}/login`, credential);
  }
}
