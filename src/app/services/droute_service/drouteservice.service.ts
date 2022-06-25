import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { post } from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class DrouteserviceService {
  request_id:number
  daladala_id:any
  route_id:any
  start:any
  expire:any
  constructor(private http:HttpClient,private router:Router) { }
  getall(){
    return this.http.get("http://localhost:8089/daladalaroute/get")
  }
  adddroute(body:any){
    return this.http.post("http://localhost:8089/daladalaroute/post",body)
  }
  updateddroute(data:any){
    return this.http.put("http://localhost:8089/daladalaroute/put",data)
  }
  getById(id:number){
    return this.http.get("http://localhost:8089/daladalaroute/get/"+id)
  }
  delete(id:number){
    return this.http.delete("http://localhost:8089/daladalaroute/delete/"+id)
  }
  onDataReady(){
    this.router.navigateByUrl("/report2").then(()=>{
      this.router.navigateByUrl("/report2")
      window.print();
      this.router.navigateByUrl("/firstpage/home")
    })
   
  }
}
