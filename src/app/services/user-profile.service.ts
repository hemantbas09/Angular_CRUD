import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  private totalUser: number = 0;
  private totalUserSubject = new Subject<number>();
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
  updateUserProfile(id: number, updatedData: any): Observable<any> {
    return this._http.put(
      `http://localhost:3000/userProfile/${id}`,
      updatedData
    );
  }

  deleteUserProfile(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/userProfile/${id}`);
  }

  setTotalUser(count: number) {
    this.totalUser = count;
    this.totalUserSubject.next(count);
  }
  getTotalUser(): number {
    return this.totalUser;
  }

  getTotalUserObservable(): Observable<number> {
    return this.totalUserSubject.asObservable();
  }
}
