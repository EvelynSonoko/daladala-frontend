import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/user_service/userservice.service';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  loginform:FormGroup
  status:any
  email:any
  visible=false
  constructor(private router:Router,private userservice:UserserviceService) { }

  ngOnInit(): void {
    this.formConfiguration()
    this.status = this.userservice.status
    this.email = this.userservice.email
    if(this.status == "register"){
      this.loginform.get("email")?.setValue(this.email)
      this.loginform.get("password")?.setValue(this.email)
    }
    
  }
  formConfiguration(){
    this.loginform=new FormGroup({
      email:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required])
    })
  }
  login(){
    console.log(this.loginform.value)
    if(this.status == "login"){
      console.log(this.status)
      this.userservice.login(this.loginform.value.email,this.loginform.value.password).subscribe((result:any)=>{
        if(result != null){
          sessionStorage.setItem("user",JSON.stringify(result))
          if(result.usertype == "Admin"){
            this.router.navigateByUrl("/administrator/nav")
          }else{
            this.router.navigateByUrl("/firstpage/home")
          }
        }
        else{
          console.log("user not found")
          this.visible=true
        }
      })

    }else{
      this.router.navigateByUrl("/change")
      console.log(this.status)
    }
    
  }
  

}
