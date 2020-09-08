import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbSlideEvent, NgbSlideEventSource,NgbCarousel } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  // images = [1, 2, 3].map(() => `https://picsum.photos/900/250?random&t=${Math.random()}`);
  images=['assets/static/verve2.png','assets/static/vb.png','assets/static/PinkLogo.png'];
  showNavigationArrows = true;
  showNavigationIndicators = true;
  pauseOnHover = true;

  @ViewChild('mycarousel', {static : true}) carousel: NgbCarousel;


  constructor() { }

  ngOnInit(): void {
  }
  onSlide(slideEvent: NgbSlideEvent) {
    // console.log(slideEvent.source);
    // console.log(NgbSlideEventSource.ARROW_LEFT);
    // console.log(slideEvent.paused);
    // console.log(NgbSlideEventSource.INDICATOR);
    // console.log(NgbSlideEventSource.ARROW_RIGHT);
  }
  // startCarousel() {
  //   this.carousel.cycle();
  // }

  // pauseCarousel() {
  //   this.carousel.pause();
  // }

  // moveNext() {
  //   this.carousel.next();
  // }

  // getPrev() {
  //   this.carousel.prev();
  // }

  // goToSlide(slide) {
  //   this.carousel.select(slide);
  // }
}
