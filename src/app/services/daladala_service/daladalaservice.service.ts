import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DaladalaserviceService {
  
  constructor(private http:HttpClient) { }
  getall(){
    return this.http.get("http://localhost:8089/daladala/get")
  }
  adddaladala(body:any){
    return this.http.post("http://localhost:8089/daladala/post",body)
  }
  updatedaladala(data:any){
    return this.http.put("http://localhost:8089/daladala/put",data)
  }
  getbyid(id:String){
    return this.http.get("http://localhost:8089/daladala/get/"+id)
  }
  delete(id:String){
    return this.http.delete("http://localhost:8089/daladala/delete/"+id)
  }
  getByOwnerId(owner_id:String){
    return this.http.get("http://localhost:8089/daladala/car/"+owner_id)
  }
}
