import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  par : number;
  _enableCarousel = true;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.par = +this.route.snapshot.queryParamMap.get("id");

  }



}
