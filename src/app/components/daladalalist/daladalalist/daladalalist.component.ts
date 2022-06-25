import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DaladalaserviceService } from 'src/app/services/daladala_service/daladalaservice.service';

@Component({
  selector: 'app-daladalalist',
  templateUrl: './daladalalist.component.html',
  styleUrls: ['./daladalalist.component.css']
})
export class DaladalalistComponent implements OnInit {
  data:any
  loading:Boolean

  constructor(private router:Router,private daladalaservice:DaladalaserviceService) { }

  ngOnInit(): void {
    this.getall()
  }
getall(){
  this.loading=true
  this.daladalaservice.getall().subscribe((res:any)=>{
    this.data=res
    this.loading=false
  })
}
updatedaladala(daladala:any){
  this.router.navigateByUrl("administrator/updatedaladala/"+daladala.daladala_id)
}
delete(id:String){
  this.daladalaservice.delete(id).subscribe(res=>{
    this.getall()
  })

}
}
