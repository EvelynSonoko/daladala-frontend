import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DrouteserviceService } from 'src/app/services/droute_service/drouteservice.service';

@Component({
  selector: 'app-updaterequest',
  templateUrl: './updaterequest.component.html',
  styleUrls: ['./updaterequest.component.css']
})
export class UpdaterequestComponent implements OnInit {
  daladalarouteform:FormGroup
  constructor(private router:Router,private drouteservice:DrouteserviceService,private activateroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getById()
    this.formConfiguration()
  }
  formConfiguration(){
    this.daladalarouteform=new FormGroup({
      id:new FormControl('',(Validators.required)),
      daladala_id:new FormControl('',(Validators.required)),
      route_id:new FormControl('',(Validators.required)),
      receipt_no:new FormControl('',(Validators.required)),
      expire:new FormControl('',(Validators.required)),
      status:new FormControl('',(Validators.required))
    })
  }
  getById(){
  
    this.drouteservice.getById(this.drouteservice.request_id).subscribe((res:any)=>{
      console.log(res)
      Object.keys(res).forEach(key=>{
        if(this.daladalarouteform.value.hasOwnProperty(key)){
          this.daladalarouteform.get(key)?.setValue(res[key])
        }
      })
      // this.daladalarouteform.get('id')?.setValue(res.id)
      // this.daladalarouteform.get("expire")?.setValue(res.expire)
    })
  }
  Update(){
    const values=this.daladalarouteform.value
   // values['start'] = new Date().toLocaleDateString('en-CA')
    //values['status'] = true
    console.log(values)
    this.drouteservice.updateddroute(values).subscribe((result =>{
      this.daladalarouteform.reset()
      this.router.navigateByUrl("/administrator/requestlist").then(() =>{
        window.location.reload()
      })
    }))
  }
}
