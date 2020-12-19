import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  slides = [
    {'image': 'assets\\img\\DashBoard_Carousels\\pexels-josh-sorenson-990432.jpg'},
    {'image': 'assets\\img\\DashBoard_Carousels\\pexels-malte-luk-1848924.jpg'},
    {'image': 'assets\\img\\DashBoard_Carousels\\booksupdated.jpg'}, 
    {'image': 'assets\\img\\DashBoard_Carousels\\learn-3653430_1280.jpg'}, 
    {'image': 'assets\\img\\DashBoard_Carousels\\library-2616960_1280.jpg'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
