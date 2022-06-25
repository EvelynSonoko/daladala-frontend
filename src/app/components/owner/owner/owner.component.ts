
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { OwnerserviceService } from 'src/app/services/owner_service/ownerservice.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {
  userForm:FormGroup

  constructor(private router:Router,private ownerservice:OwnerserviceService) { }

  ngOnInit(): void {
    console.log("when page run")
    this.formConfiguration()
  }
  formConfiguration(){
    this.userForm =new FormGroup({
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
      email:new FormControl('',[Validators.required])
    })
  }
  saveuser(){
    const values= this.userForm.value
    this.ownerservice.addowner(values).subscribe(result =>{
      this.router.navigateByUrl("firstpage/ownerlist")
    })
  }

}
