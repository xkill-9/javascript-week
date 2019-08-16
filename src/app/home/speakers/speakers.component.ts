import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-speakers',
    templateUrl: './speakers.component.html',
    styleUrls: ['./speakers.component.scss'],
})
export class SpeakersComponent implements OnInit {
    speakers = [];
    selectedSpeaker;

    ngOnInit() {
        this.speakers = [
            {
                name: 'Diego Botia',
                picture: '../../../../assets/img/guests/diego.png',
                bio: `Ingeniero de Sistemas y de Computación, Master en Software Libre y Doctor en Ingeniería Electrónica.
                    Experiencia de 15 años en desarrollo de software`,
            },
            {
                name: 'Oscar Granada',
                picture: '../../../../assets/img/guests/oscar.png',
                bio: `He has more than 10 years of experience as a software developer.
                    Started editing CSS files to modify Musicmatch Jukebox themes and hasn't stop developing software ever since.`,
            },
            {
                name: 'Alejandro Peña',
                picture: '../../../../assets/img/guests/alejandro.jpg',
                bio: `Researcher focused on Machine Learning. Mr.
                Peña has developed several researchers and publications about modelling of
                dynamical systems`,
            },
            {
                name: 'Olga Saucedo',
                picture: '../../../../assets/img/guests/olga.jpeg',
                bio:
                    'Tengo una amplia y variada experiencia profesional, desde enseñar francés hasta tripular veleros. Actualmente, soy analista de pruebas en Globant. Ante todo, creo soluciones.',
            },
            {
                name: 'Ana Sosa',
                picture: '../../../../assets/img/anaSosa.png',
                bio:
                    'Co-organizer and co-founder of @pionerasdev and #RailsGirlsMed. Happy dev at @globant',
            },
            {
                name: 'Alex Ramirez',
                picture: '../../../../assets/img/guests/alex.png',
                bio:
                    'Alex Ramirez is a software developer with experience in different languages, who decided to focus in JavaScript related technologies for the last 7 years.',
            },
            {
                name: 'David Montoya',
                picture: '../../../../assets/img/guests/david.jpg',
                bio:
                    'Soy desarrollador de NodeJS en Wolox, donde ejerzo con pasión el aprendizaje, la tecnología y la innovación. Amante de los videojuegos y de compartir conocimiento.',
            },
            {
                name: 'Julian Lamprea',
                picture: '../../../../assets/img/guests/julian.jpg',
                bio:
                    'Ingeniero de Software Senior y líder técnico, con más de 10 años trabajando en optimización y rendimiento desde Backend hasta Frontend.',
            },
            {
                name: 'Camilo Montoya',
                picture: '../../../../assets/img/guests/camilo.jpeg',
                bio:
                    'Fundador de NodeCo, una comunidad de nodejs y javascript. Actualmente es CTO en Salesavant una empresa de data science para asesores comerciales.',
            },
        ];
    }
}
