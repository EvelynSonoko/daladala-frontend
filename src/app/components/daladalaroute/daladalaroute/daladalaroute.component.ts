import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DrouteserviceService } from 'src/app/services/droute_service/drouteservice.service';

@Component({
  selector: 'app-daladalaroute',
  templateUrl: './daladalaroute.component.html',
  styleUrls: ['./daladalaroute.component.css']
})
export class DaladalarouteComponent implements OnInit {
  daladalarouteform:FormGroup

  constructor(private daladalaroute:DrouteserviceService,private router:Router) { }

  ngOnInit(): void {
    this.formConfiguration()
  }
formConfiguration(){
  this.daladalarouteform= new FormGroup({
    id:new FormControl('',[Validators.required]),
    daladala_id:new FormControl('',[Validators.required]),
    route_id:new FormControl('',[Validators.required]),
    start:new FormControl('',[Validators.required]),
    expire:new FormControl('',[Validators.required]),
    receipt_no:new FormControl('',[Validators.required]),
    status:new FormControl('',[Validators.required])
  })
}
save(){
  
}
}
