import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o/public_api';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  customOptions: OwlOptions = {
    loop: false,
    margin:20,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    items:4,
    responsive: {
      0: {
        items: 1
      },
      575: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
}
