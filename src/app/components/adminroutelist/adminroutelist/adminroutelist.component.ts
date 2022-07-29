import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteserviceService } from 'src/app/services/routes_service/routeservice.service';

@Component({
  selector: 'app-adminroutelist',
  templateUrl: './adminroutelist.component.html',
  styleUrls: ['./adminroutelist.component.css']
})
export class AdminroutelistComponent implements OnInit {
  data:any
  loading:Boolean
  constructor(private router:Router,private routeservice:RouteserviceService) { }

  ngOnInit(): void {
    this.getall()
    
  }
  
  getall(){
    this.loading=true
    this.routeservice.getall().subscribe((res:any) =>{
      this.data=res
      console.log(this.data)
      this.loading=false
    })
  }
  addroute(){
    this.router.navigateByUrl("administrator/route")
  }
  updateroute(route:any){
    this.router.navigateByUrl("administrator/updateroute/"+route.id)
  }
  delete(id:number){
    this.routeservice.delete(id).subscribe(res =>{
      this.getall()
    })
  }
}
