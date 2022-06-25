import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { RouteserviceService } from 'src/app/services/routes_service/routeservice.service';

@Component({
  selector: 'app-routeupdate',
  templateUrl: './routeupdate.component.html',
  styleUrls: ['./routeupdate.component.css']
})
export class RouteupdateComponent implements OnInit {
  routeupdateform:FormGroup
  constructor(private routeservice:RouteserviceService,private router:Router,private activeroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.formConfiguration()
    this.getbyid()
  }
formConfiguration(){
  this.routeupdateform = new FormGroup({
    id:new FormControl('',[Validators.required]),
    route_name:new FormControl('',[Validators.required]),
    route_type:new FormControl('',[Validators.required]),
    route_fees:new FormControl('',[Validators.required]),
    
  })
}

getbyid(){
  const id = this.activeroute.snapshot.params['id'];
  this.routeservice.getbyid(id).subscribe((res:any) =>{
   Object.keys(res).forEach((key)=>{
     if(this.routeupdateform.value.hasOwnProperty(key)){
       this.routeupdateform.get(key)?.setValue(res[key])
     }
   })
  });
}
updateroute(){
  const values = this.routeupdateform.value
  this.routeservice.updateroute(values).subscribe(result =>{
    this.router.navigateByUrl("administrator/adminroutelist")
  })
}
}
