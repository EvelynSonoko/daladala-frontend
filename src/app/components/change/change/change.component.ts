import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/user_service/userservice.service';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {
  changeform:FormGroup
  valid=false
  email:any
  constructor(private userservice:UserserviceService,private router:Router) { }

  ngOnInit(): void {
    this.formConfiguration()
    this.email = this.userservice.email
  }
  formConfiguration(){
    this.changeform =new FormGroup({
      password:new FormControl('',[Validators.required]),
      confirmPassword:new FormControl('',[Validators.required])
    })
  }


  changePassword(){
    const newPass = this.changeform.value.password
    const confirm = this.changeform.value.confirmPassword
    if(newPass == confirm){
      this.valid = false
      const values = this.changeform.value
      values['email'] = this.email
      this.userservice.updateuser(values).subscribe(result=>{
        console.log(result)
        this.userservice.status = "login"
        this.router.navigateByUrl("change/login")
      })
      console.log(values)
    }else{
      this.valid = true
      console.log(confirm)
    }
    
  }
  
}
