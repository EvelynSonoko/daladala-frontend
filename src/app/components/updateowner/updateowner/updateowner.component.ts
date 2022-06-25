import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerserviceService } from 'src/app/services/owner_service/ownerservice.service';

@Component({
  selector: 'app-updateowner',
  templateUrl: './updateowner.component.html',
  styleUrls: ['./updateowner.component.css']
})
export class UpdateownerComponent implements OnInit {
  ownerupdateForm:FormGroup;
  
  constructor(private router:Router,private ownerservise:OwnerserviceService,private activateroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.formConfiguration()
    this.getbyid()
  }
  formConfiguration(){
  this.ownerupdateForm= new FormGroup({
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
  getbyid(){
    const id=this.activateroute.snapshot.params['id'];
    this.ownerservise.getbyid(id).subscribe((res:any)=>{
      Object.keys(res).forEach((key)=>{
        if(this.ownerupdateForm.value.hasOwnProperty(key)){
          this.ownerupdateForm.get(key)?.setValue(res[key])
        }
      })
    })
  }
  updateowner(){
    const values=this.ownerupdateForm.value
    this.ownerservise.updateowner(values).subscribe(result =>{
      this.router.navigateByUrl("administrator/ownerlist")
    })
  }

}
