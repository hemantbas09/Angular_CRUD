import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  constructor(private _http: HttpClient) {}

  addUserProfile(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/userProfile', data);
  }

  getUserProfile(): Observable<any> {
    return this._http.get('http://localhost:3000/userProfile');
  }

  getUserProfileById(id: number): Observable<any> {
    return this._http.get(`http://localhost:3000/userProfile/${id}`);
  }

  deleteUserProfile(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/userProfile/${id}`);
  }
}
