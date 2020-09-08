import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent{
  images=['assets/static/verve2.png','assets/static/vb.png','assets/static/PinkLogo.png'];
  showNavigationArrows = true;
  showNavigationIndicators = true;
  pauseOnHover = true;

  @ViewChild('mycarousel', {static : true}) carousel: NgbCarousel;


  constructor() { }
}
