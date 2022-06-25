import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverserviceService } from 'src/app/services/driver_service/driverservice.service';

@Component({
  selector: 'app-driverlist',
  templateUrl: './driverlist.component.html',
  styleUrls: ['./driverlist.component.css']
})
export class DriverlistComponent implements OnInit {
  data:any
  loading:Boolean

  constructor(private router:Router,private driverservice:DriverserviceService) { }

  ngOnInit(): void {
    this.getall()
  }
  getall(){
    this.loading=true
    this.driverservice.getall().subscribe((res:any)=>{
      this.data=res
      this.loading=false
    })
  }
  updatedriver(driver:any){
    this.router.navigateByUrl("administrator/updatedriver/"+driver.id)
  }
  delete(id:String){
    this.driverservice.delete(id).subscribe(res =>{
      this.getall()
    })
  }

}
