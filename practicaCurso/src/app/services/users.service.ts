import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User} from 'src/app/models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getListUsers(): Observable<any> {
    return this.http.get('/api/users?page=1');
  }

  getSingleUser(id: number): Observable<any> {
    return this.http.get('/api/user/'+ id);
  }
}
