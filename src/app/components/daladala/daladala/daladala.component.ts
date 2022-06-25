import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DaladalaserviceService } from 'src/app/services/daladala_service/daladalaservice.service';
import { OwnerserviceService } from 'src/app/services/owner_service/ownerservice.service';

@Component({
  selector: 'app-daladala',
  templateUrl: './daladala.component.html',
  styleUrls: ['./daladala.component.css']
})
export class DaladalaComponent implements OnInit {
  daladalaForm:FormGroup
  email:any

  constructor(private daladalaservice:DaladalaserviceService,private router:Router,private ownerservice:OwnerserviceService) { }

  ngOnInit(): void {
    this.formConfiguration()
    var user = JSON.parse(sessionStorage.getItem("user")!)
    console.log(user.email)
    this.email = user.email
    this.getByowner()
  }
  formConfiguration(){
    this.daladalaForm =new FormGroup({
      daladala_id:new FormControl('',[Validators.required]),
      id_mark:new FormControl('',[Validators.required]),
      model:new FormControl('',[Validators.required]),
      no_pas:new FormControl('',[Validators.required]),
      owner_id:new FormControl('',[Validators.required]),
      driver_id:new FormControl('',[Validators.required]),
      place:new FormControl('',[Validators.required]),
      lis_no:new FormControl('',[Validators.required]),
      insurance_no:new FormControl('',[Validators.required])
 })
}
savedaladala(){
  const values =this.daladalaForm.value
  this.daladalaservice.adddaladala(values).subscribe(result =>{
    this.router.navigateByUrl("firstpage/home")
  })
}

getByowner(){
  this.ownerservice.getByEmail(this.email).subscribe((data:any) =>{
    console.log(data)
    this.daladalaForm.get("owner_id")?.setValue(data.id)
    data.driverList.forEach((element:any) => {
      this.daladalaForm.get("driver_id")?.setValue(element.id)
    });
    
  })
}
}
