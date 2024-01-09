import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
const URL_STATISTICS = "api/statistic/";
const URL_COUNTRY = "api/country/";
const URL_COMPANY = "api/company/";

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

  getCharts() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
    })
  }
    return this.http.get<{status: boolean, data: any}>(URL_STATISTICS + "get/chart", httpOptions)
  }

  getById(id: string){
    return this.http.get<{status: boolean, data: any}>(URL_STATISTICS + `get/${id}`);
  }

  filters(data: any){
    const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
        ...data
      })
    };
    return this.http.get<{status: boolean, data: any}>(URL_STATISTICS + `filters`, httpOptions);
  }

  search(data: any){
    return this.http.post<{status: boolean, data: any}>(URL_STATISTICS + `search/${data}`, {...data});
  }

  getCountries(){
    return this.http.get<{status: boolean, data: any}>(URL_COUNTRY + 'get')
  }  
  
  getCompanies(){
    return this.http.get<{status: boolean, data: any}>(URL_COMPANY + 'get')
  }
}
