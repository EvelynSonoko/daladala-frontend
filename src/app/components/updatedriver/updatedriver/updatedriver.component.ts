import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DriverserviceService } from 'src/app/services/driver_service/driverservice.service';

@Component({
  selector: 'app-updatedriver',
  templateUrl: './updatedriver.component.html',
  styleUrls: ['./updatedriver.component.css']
})
export class UpdatedriverComponent implements OnInit {
  driverupdateform:FormGroup;
  constructor(private router:Router,private driverservice:DriverserviceService,private activateroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.formConfiguration()
    this.getbyid()
  }
  formConfiguration(){
    this.driverupdateform =new FormGroup({
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
  getbyid(){
    const id =this.activateroute.snapshot.params['id'];
    this.driverservice.getbyid(id).subscribe((res:any)=>{
      Object.keys(res).forEach((key)=>{
        if(this.driverupdateform.value.hasOwnProperty(key)){
          this.driverupdateform.get(key)?.setValue(res[key])
        }
      })
    })
  
  }
  updatedriver(){
    const values =this.driverupdateform.value
    this.driverservice.updatedriver(values).subscribe(result =>{
      this.router.navigateByUrl("administrator/driverlist")
    })
  }

}
