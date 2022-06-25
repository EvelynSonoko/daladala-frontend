import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteserviceService {

  constructor(private http:HttpClient) { }

  getall(){
    return this.http.get("http://localhost:8089/route/get")
  }

  addroute(body:any){
    return this.http.post("http://localhost:8089/route/post",body)
  }
  updateroute(data:any){
    return this.http.put("http://localhost:8089/route/put",data)
  }
  getbyid(id:number){
    return this.http.get("http://localhost:8089/route/get/"+id)
  }
  delete(id:number){
    return this.http.delete("http://localhost:8089/route/delete/"+id)
  }
}
