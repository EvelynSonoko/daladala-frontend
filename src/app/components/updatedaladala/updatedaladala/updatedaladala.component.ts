import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DaladalaserviceService } from 'src/app/services/daladala_service/daladalaservice.service';

@Component({
  selector: 'app-updatedaladala',
  templateUrl: './updatedaladala.component.html',
  styleUrls: ['./updatedaladala.component.css']
})
export class UpdatedaladalaComponent implements OnInit {
  updateform:FormGroup
  constructor(private daladalaservice:DaladalaserviceService,private router:Router,private activateroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.formConfiguration()
    this.getById()
    
  }
  formConfiguration(){
    this.updateform=new FormGroup({
      daladala_id:new FormControl('',[Validators.required]),
      id_mark:new FormControl('',[Validators.required]),
      model:new FormControl('',[Validators.required]),
      no_pas:new FormControl('',[Validators.required]),
      owner_id:new FormControl('',[Validators.required]),
      insurance_no:new FormControl('',[Validators.required]),
      lis_no:new FormControl('',[Validators.required]),
      place:new FormControl('',[Validators.required]),
      driver_id:new FormControl('',[Validators.required])
    })
  }
getById(){
const id=this.activateroute.snapshot.params['id']
this.daladalaservice.getbyid(id).subscribe((res:any)=>{
  Object.keys(res).forEach((key)=>{
    if(this.updateform.value.hasOwnProperty(key)){
      this.updateform.get(key)?.setValue(res[key])
    }
  })
})
}
updatedaladala(){
  const values =this.updateform.value
  this.daladalaservice.updatedaladala(values).subscribe(result =>{
    this.router.navigateByUrl("administrator/daladalalist")
  })
}
 
}
