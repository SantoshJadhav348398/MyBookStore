import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionMenu } from '../Models/action-menu';
import { UserDetails } from '../Models/user-details';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Id : number;
  EnableCarousel:boolean = true;
  IsCard:boolean = true;
  IsAdmin:boolean = true;
  title = "MY BOOK STORE";
  ActionList: ActionMenu[] = [
    {Id:1, IconName : "account_box", MenuName: "PROFILE"},
    {Id:2, IconName : "book", MenuName: "ADD BOOK"},
    {Id:3, IconName : "rate_review", MenuName: "PRODUCT ANALYSIS"},
    {Id:4, IconName : "store", MenuName: "STORE"},
    {Id:5, IconName : "shopping_cart", MenuName: "CART"},
    {Id:6, IconName : "contact_phone", MenuName: "CONTACT US"}
  ];
  constructor(private route:ActivatedRoute, private _userService: UserService) { }

  ngOnInit(): void {
    this.Id = +this.route.snapshot.queryParamMap.get("id");
    this.GetUserDetailsById(this.Id);
  }

  public GetUserDetailsById(id: number):void
  {
      this._userService.GetUserDetails(id).subscribe((response:UserDetails) =>{
        //console.log(response);
        
      });
  }


}
