import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DriverserviceService {

  constructor(private hhtp:HttpClient) { }
  getall(){
    return this.hhtp.get("http://localhost:8089/driver/get")
  }
  adddriver(body:any){
    return this.hhtp.post("http://localhost:8089/driver/post",body)
  }
  updatedriver(data:any){
    return this.hhtp.put("http://localhost:8089/driver/put",data)
  }
  getbyid(id:String){
    return this.hhtp.get("http://localhost:8089/driver/get/"+id)
  }
  delete(id:String){
    return this.hhtp.delete("http://localhost:8089/driver/delete/"+id)
  }
}
