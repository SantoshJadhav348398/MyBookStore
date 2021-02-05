import { Component, OnInit } from '@angular/core';
import { CardDetails } from '../../Models/card-details';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  CardDetailsList: CardDetails[] = [
    //{CardName:'Art Of Programming', CardCategory:'Technology', CardImgUrl:'assets/img/BookImages/ArtOfProgrammingImg.jfif'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
