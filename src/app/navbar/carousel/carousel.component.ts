import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images = [62, 83, 466, 965, 982].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor() {
  }

  ngOnInit(): void {
  }

}
