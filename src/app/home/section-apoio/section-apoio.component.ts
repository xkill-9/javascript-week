import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-section-apoio",
    templateUrl: "./section-apoio.component.html",
    styleUrls: ["./section-apoio.component.scss"]
})
export class SectionApoioComponent implements OnInit {
    public voluntarios = [
        {
            name: "Jhonatan Giraldo",
            picture: "/assets/img/man.png"
        },
        {
            name: "Ana Sosa",
            picture: "/assets/img/anaSosa.png"
        },
        {
            name: "Andrea Cordoba",
            picture: "/assets/img/andrea-cordoba.jpg"
        },
        {
            name: "Carlos Rengifo",
            picture: "/assets/img/man.png"
        },
        {
            name: "Jorge Ivan Morales",
            picture: "/assets/img/jorgeMorales.jpg"
        },
        {
            name: "Gabriel Trujillo",
            picture: "/assets/img/man.png"
        },
        {
            name: "Jeyson Molina",
            picture: "/assets/img/man.png"
        },
        {
            name: "Oscar Granada",
            picture: "/assets/img/oscarGranada.png"
        },
        {
            name: "Nathaly Mesa",
            picture: "/assets/img/man.png"
        },
        {
            name: "Juanita",
            picture: "/assets/img/Juanita.jpg"
        },
        {
            name: "Paula Mazo",
            picture: "/assets/img/man.png"
        }
    ];

    constructor() {}

    ngOnInit() {}
}
