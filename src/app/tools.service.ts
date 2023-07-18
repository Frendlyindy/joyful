import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tools } from './tools.model';

@Injectable({
  providedIn: 'root',
})
export class ToolsService {
  constructor(private http: HttpClient) {}

  getTools(): Observable<Tools[]> {
    return this.http.get<Tools[]>('http://localhost:8080/tools');
  }
}
