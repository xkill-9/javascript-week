import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-guests',
  templateUrl: './section-guests.component.html',
  styleUrls: ['./section-guests.component.scss']
})
export class SectionGuestsComponent implements OnInit {

  imageIndex: number;
  guests: any;
  pageX: number;

  constructor() { }

  ngOnInit() {
    this.guests = [
      {
        image: '/assets/img/special-guests/srdjan-josipovic.png',
        talk: 'Keynote: Why enterprises embrace Node.js',
        name: 'Serge Josipovic',
        company: 'Software Achitecture - Rockwell Automation',
      },
      {
        image: '/assets/img/special-guests/pete-kinstry.png',
        talk: 'Node projects at scale',
        name: 'Peter Mc Kinstry',
        company: 'Technical Director - Globant',
      },
      {
        image: '/assets/img/special-guests/rob-howard.png',
        talk: 'Node projects at scale',
        name: 'Rob Howard',
        company: 'Technical Director - Globant',
      },
      // {
      //   image: '/assets/img/special-guests/adrian-estrada.png',
      //   talk: 'Detangling multithreading in Node.js',
      //   name: 'Adrian Estrada',
      //   company: 'Node Source',
      // },
    ];
    this.imageIndex = 0;
  }

  public modifyImageIndex(digit: number): void  {
    let index = this.imageIndex + digit;
    if (index < 0) {
      index = this.guests.length - 1;
    }
    if (index >= this.guests.length) {
      index = 0;
    }
    this.imageIndex = index;
  }

  public touchStart(e: TouchEvent) {
    const { pageX } = e.touches[0];
    this.pageX = pageX;
  }

  public touchEnd(e: TouchEvent) {
    const { pageX } = e.changedTouches[0];
    const left = (this.pageX - pageX) > 0;
    this.modifyImageIndex(left ? 1 : -1);
  }

}
