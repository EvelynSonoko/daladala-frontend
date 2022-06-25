import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerserviceService } from 'src/app/services/owner_service/ownerservice.service';

@Component({
  selector: 'app-ownerlist',
  templateUrl: './ownerlist.component.html',
  styleUrls: ['./ownerlist.component.css']
})
export class OwnerlistComponent implements OnInit {
  data:any
  loading:Boolean

  constructor(private router:Router,private ownerservise:OwnerserviceService) { }

  ngOnInit(): void {
    this.getall()
  }
  getall(){
    this.loading=true
    this.ownerservise.getall().subscribe((res:any)=>{
      this.data=res
      this.loading=false
    })
    }
    updateowner(owner:any){
      this.router.navigateByUrl("administrator/updateowner/"+owner.id)
    }
    delete(id:string){
      this.ownerservise.delete(id).subscribe(res =>{
        this.getall()
      })
    }
  }

