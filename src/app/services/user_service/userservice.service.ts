import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  status = "login"
  email = ""
  constructor(private http:HttpClient) { }
  getall(){
    return this.http.get("http://localhost:8089/user/get")
  }
  adduser(body:any){
    return this.http.post("http://localhost:8089/user/post",body)
  }
  updateuser(data:any){
    return this.http.put("http://localhost:8089/user/put",data)
  }
  getById(email:String){
    return this.http.get("http://localhost:8089/user/get/"+email)
  }
  Delete(email:String){
    return this.http.delete("http://localhost:8089/user/delete"+email)

  }
  login(email:String,pass:String){
    return this.http.get("http://localhost:8089/user/login/email/"+email+"/pass/"+pass)

  }
  
}
