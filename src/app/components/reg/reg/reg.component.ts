import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { Router } from '@angular/router';
import { OwnerserviceService } from 'src/app/services/owner_service/ownerservice.service';
import { UserserviceService } from 'src/app/services/user_service/userservice.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  userForm:FormGroup

  constructor(private router:Router,private ownerservice:OwnerserviceService ,private userservice:UserserviceService) { }

  ngOnInit(): void {
    this.formConfiguration()
    var user=JSON.parse(sessionStorage.getItem("user")!)
    
  }
  formConfiguration(){
    this.userForm=new FormGroup({
      id:new FormControl('',[Validators.required]),
      name:new FormControl('',[Validators.required]),
      address:new FormControl('',[Validators.required]),
      age:new FormControl('',[Validators.required]),
      gender:new FormControl('',[Validators.required]),
      dob:new FormControl('',[Validators.required]),
      phone_no:new FormControl('',[Validators.required]),
      date_record:new FormControl('',[Validators.required]),
      occupation:new FormControl('',[Validators.required]),
      id_type:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.required]),
    })
  }
  saveuser(){
    this.userservice.status="register"
    const values= this.userForm.value
    values['date_record'] = new Date(Date.parse(this.userForm.value.date_record)).toLocaleDateString('en-CA')
    values['dob']=new Date(Date.parse(this.userForm.value.dob)).toLocaleDateString('en-CA')

    console.log(values)
    this.ownerservice.addowner(values).subscribe((result:any) =>{
      this.userservice.email = result.email
      this.userForm.reset()
      this.router.navigateByUrl("/login")
    })
  }
}
