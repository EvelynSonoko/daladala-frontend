import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DriverserviceService } from 'src/app/services/driver_service/driverservice.service';
import { OwnerserviceService } from 'src/app/services/owner_service/ownerservice.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  driverForm!:FormGroup
  email:any
  constructor(private driverservice:DriverserviceService,private router:Router,private ownerservice:OwnerserviceService) { }

  ngOnInit(): void {
    this.formConfiguration()
    var user = JSON.parse(sessionStorage.getItem("user")!)
    console.log(user.email)
    this.email = user.email
    this.getByowner()
  }
  formConfiguration(){
    this.driverForm = new FormGroup({
      id:new FormControl('',[Validators.required]),
      driver_name:new FormControl('',[Validators.required]),
      address:new FormControl('',[Validators.required]),
      age:new FormControl('',[Validators.required]),
      lis_no:new FormControl('',[Validators.required]),
      tel_no:new FormControl('',[Validators.required]),
      dob:new FormControl('',[Validators.required]),
      gender:new FormControl('',[Validators.required]),
      lis_type:new FormControl('',Validators.required),
      ex_date:new FormControl('',[Validators.required]),
      owner_id:new FormControl('',[Validators.required])
    })
    }
    savedriver(){
      const values = this.driverForm.value
      this.driverservice.adddriver(values).subscribe(result =>{
        this.router.navigateByUrl("firstpage/home")
      })
    }

    getByowner(){
      this.ownerservice.getByEmail(this.email).subscribe((data:any) =>{
        this.driverForm.get("owner_id")?.setValue(data.id)
      })
    }
  }

