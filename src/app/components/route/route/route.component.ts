import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouteserviceService } from 'src/app/services/routes_service/routeservice.service';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {
  routeForm!:FormGroup
  constructor(private routeservice:RouteserviceService,private router:Router) { }

  ngOnInit(): void {
    console.log("when page run")
    this.formConfiguration()
  }

  formConfiguration(){
    this.routeForm = new FormGroup({
      id:new FormControl('',[Validators.required]),
      route_name:new FormControl('',[Validators.required]),
      route_type:new FormControl('',[Validators.required]),
      route_fees:new FormControl('',[Validators.required]),
    })
  }
  saveroute(){
    const values = this.routeForm.value
    this.routeservice.addroute(values).subscribe(result =>{
      this.router.navigateByUrl("administrator/adminroutelist")
    })
  }
}
