import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>('http://localhost:8080/users');
  }

  addUser(userData: Users): Observable<Users> {
    return this.http.post<Users>('http://localhost:8080/users', userData);
  }

  updateUser(password: string, userData: Users): Observable<Users> {
    return this.http.put<Users>(
      `http://localhost:8080/users/${password}`,
      userData
    );
  }

  deleteUser(password: string): Observable<any> {
    return this.http.delete(`http://localhost:8080/users/${password}`);
  }

  getOneUser(password: string): Observable<Users> {
    return this.http.get<Users>(`http://localhost:8080/users/${password}`);
  }
}
