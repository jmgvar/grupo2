import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resource} from 'src/app/models/resource'

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<any> {
    return this.http.get('/assets/resources.json');
  }
}
