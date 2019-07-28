import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-guests',
  templateUrl: './section-guests.component.html',
  styleUrls: ['./section-guests.component.scss']
})
export class SectionGuestsComponent implements OnInit {

  imageIndex: number;
  guests: any;

  constructor() { }

  ngOnInit() {
    this.guests = [
      {
        image: '/assets/img/special-guests/micro.svg',
        talk: '1. How to implement Node JS projects in the real world',
        name: 'Gabriel Trujillo',
        company: 'TM Rockwell',
      },
      {
        image: '/assets/img/oscarGranados.png',
        talk: '2. How to implement Node JS projects in the real world',
        name: 'Gabriel Trujillo',
        company: 'TM Rockwell',
      },
      {
        image: '/assets/img/man.png',
        talk: '3. How to implement Node JS projects in the real world',
        name: 'Gabriel Trujillo',
        company: 'TM Rockwell',
      }
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
    console.log(index);
    this.imageIndex = index;
  }

}
