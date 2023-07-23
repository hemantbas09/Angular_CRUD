import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private _http: HttpClient) {}

  addCustomer(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/customerData', data);
  }

  getCustomer(): Observable<any> {
    return this._http.get('http://localhost:3000/customerData');
  }

  getCustomerById(id: number): Observable<any> {
    return this._http.get(`http://localhost:3000/customerData/${id}`);
  }

  deleteCustomer(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/customerData/${id}`);
  }
}
