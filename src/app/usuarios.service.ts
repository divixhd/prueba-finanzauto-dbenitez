import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  getUsers() {
    let headers = new HttpHeaders({
      'app-id': '63473330c1927d386ca6a3a5'
    });
    return this.http.get<any[]>('https://dummyapi.io/data/v1/user', {
      headers: headers
    });
  }
  createUser(formData: any){
    let headers = new HttpHeaders({
      'app-id': '63473330c1927d386ca6a3a5'
    });
    return this.http.post<any>('https://dummyapi.io/data/v1/user/create', formData, {
      headers: headers
    });
  }
  readInfoUser(id:any){
    let headers = new HttpHeaders({
      'app-id': '63473330c1927d386ca6a3a5'
    });
    return this.http.get<any[]>(`https://dummyapi.io/data/v1/user/${id}`, {
      headers: headers
    });
  }
  editUser(formData: any, id:any){
    let headers = new HttpHeaders({
      'app-id': '63473330c1927d386ca6a3a5'
    });
    return this.http.put<any>(`https://dummyapi.io/data/v1/user/${id}`, formData, {
      headers: headers
    });
  }
  deleteUser(id:any){
    let headers = new HttpHeaders({
      'app-id': '63473330c1927d386ca6a3a5'
    });
    return this.http.delete<any[]>(`https://dummyapi.io/data/v1/user/${id}`, {
      headers: headers
    });
  }
}
