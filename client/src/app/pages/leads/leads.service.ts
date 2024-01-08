import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
const URL_LEADS = "api/leads/";

@Injectable({
  providedIn: 'root'
})
export class LeadsService {  
    public id : EventEmitter<any> = new EventEmitter();
    public reload: EventEmitter<any> = new EventEmitter();
    constructor(private http: HttpClient) { }
  
    edit(id: string, data: any){
      return this.http.post<{status: boolean, data: any}>(URL_LEADS + `update/${id}`, data);
    }
  
    getAll() {
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
      })
    }
      return this.http.get<{status: boolean, data: any}>(URL_LEADS + "get", httpOptions)
    }
  
    getById(id: string){
      return this.http.get<{status: boolean, data: any}>(URL_LEADS + `get/${id}`);
    }
  
}
