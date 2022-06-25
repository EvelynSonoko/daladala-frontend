import { Component, OnInit } from '@angular/core';
import { OwnerserviceService } from 'src/app/services/owner_service/ownerservice.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  userdetails:any

  constructor(private ownerservice:OwnerserviceService) { }

  ngOnInit(): void {
    var user=JSON.parse(sessionStorage.getItem("user")!)
    console.log("onprofil=>",user)
    this.ownerservice.getByEmail(user.email).subscribe((res:any)=>{
      this.userdetails=res
    })
  }

}
