import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OwnerserviceService {
  

  constructor(private http:HttpClient) { }
  getall(){
    return this.http.get("http://localhost:8089/owner/get")
  }
  addowner(body:any){
    return this.http.post("http://localhost:8089/owner/post",body)
  }
  updateowner(data:any){
    return this.http.put("http://localhost:8089/owner/put",data)
  }
  getbyid(id:String){
    return this.http.get("http://localhost:8089/owner/get/"+id)
  }
  delete(id:String){
    return this.http.delete("http://localhost:8089/owner/delete/"+id)
  }
  getByEmail(email:any){
    return this.http.get("http://localhost:8089/owner/email/"+email)
  }
}
