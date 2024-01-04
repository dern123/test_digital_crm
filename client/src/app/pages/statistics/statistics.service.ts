import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
const URL_STATISTICS = "api/statistic/";

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  public id : EventEmitter<any> = new EventEmitter();
  public reload: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) { }

  edit(id: string, data: any){
    return this.http.post<{status: boolean, data: any}>(URL_STATISTICS + `update/${id}`, data);
  }

  getAll() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
    })
  }
    return this.http.get<{status: boolean, data: any}>(URL_STATISTICS + "get", httpOptions)
  }

  getById(id: string){
    return this.http.get<{status: boolean, data: any}>(URL_STATISTICS + `get/${id}`);
  }

  filters(){
    return this.http.get<{status: boolean, data: any}>(URL_STATISTICS + `filters`);
  }

  search(data: any){
    return this.http.post<{status: boolean, data: any}>(URL_STATISTICS + `search`, {code:data});
  }
}
