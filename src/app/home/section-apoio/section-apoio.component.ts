import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-section-apoio',
    templateUrl: './section-apoio.component.html',
    styleUrls: ['./section-apoio.component.scss'],
})
export class SectionApoioComponent implements OnInit {
    public voluntarios = [
        {
            name: 'Jhonatan Giraldo',
            picture: '/assets/img/jhonatan-giraldo.png',
        },
        {
            name: 'Ana Sosa',
            picture: '/assets/img/anaSosa.png',
        },
        {
            name: 'Andrea Cordoba',
            picture: '/assets/img/andrea-cordoba.jpg',
        },
        {
            name: 'Jorge Morales',
            picture: '/assets/img/jorgeMorales.jpg',
        },
        {
            name: 'Gabriel Trujillo',
            picture: '/assets/img/gabriel.jpg',
        },
        {
            name: 'Jeyson Molina',
            picture: '/assets/img/jeyson.jpg',
        },
        {
            name: 'Oscar Granada',
            picture: '/assets/img/oscarGranada.png',
        },
        {
            name: 'Nathaly Mesa',
            picture: '/assets/img/nathaly.jpg',
        },
        {
            name: 'Juanita Ramirez',
            picture: '/assets/img/Juanita.jpg',
        },
        {
            name: 'Paula Mazo',
            picture: '/assets/img/Mazo.png',
        },
        {
            name: 'Dilan Hoyos',
            picture: '/assets/img/dylan.jpg',
        },
    ];

    constructor() {}

    ngOnInit() {}
}
