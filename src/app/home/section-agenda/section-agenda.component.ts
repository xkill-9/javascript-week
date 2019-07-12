import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-section-agenda',
    templateUrl: './section-agenda.component.html',
    styleUrls: ['./section-agenda.component.scss']
})
export class SectionAgendaComponent implements OnInit {

    agendas: Array<any> = [];

    constructor() { }

    ngOnInit() {
        this.agendas = [
            {
                dia: 'Martes',
                hora: '06:00pm - 6:30pm',
                nome: 'Cristian Gutiérrez',
                titulo: 'Concurrencia en JS: Porqué tu "setTimeout" te está mintiendo',
                desc: 'El tema principal es comprender el funcionamiento basico del modelo de concurrencia de JS. Entender conceptos como el stack, event loop, event queue y event job,  para que lo usan los motores de JS y con que se comen. Tambien se busca aclarar un mal entendimiento de metodos asincronicos como los "setTimeout" y demás.',
                imagem: 'https://avatars2.githubusercontent.com/u/22488812?s=460&v=4'
            },
            {
                dia: 'Martes',
                hora: '06:30 pm - 7:00pm',
                nome: 'Sebastian Gomez',
                titulo: 'Implementando MapReduce con Web Workers',
                desc: 'En esta charla vamos a ver el uso de Web Workers para optimizar nuestro trabajo con Javascript fuera del Single Thread Y aplicar técnicas de computación distribuida (mapreduce) con ellos.',
                imagem: '../../../assets/img/sebastian.jpg'
            },
            {
                dia: 'Martes',
                hora: '07:30pm - 8:00pm',
                nome: 'Paula Mazo',
                titulo: 'Programación Funcional',
                desc: 'Pasaremos por la definición de algunos conceptos de la programación funcional hasta explorar cómo se relacionan con las buenas prácticas del desarrollo.',
                imagem: 'https://avatars2.githubusercontent.com/u/22626905?s=460&v=4'
            },
            {
                dia: 'Martes',
                hora: '08:00 pm - 8:30pm',
                nome: 'Juan Camilo Diaz',
                titulo: "Google Cloud Platform Big Data Tools",
                desc: 'Cuales son las herramientas orientadas a Big Data que podemos encontrar en la Nube de Google.',
                imagem: 'https://pbs.twimg.com/profile_images/1055300540912074752/Ar7V9bTV_400x400.jpg'
            },
            {
                dia: 'Miercoles',
                hora: '06:00pm - 6:30pm',
                nome: 'Juan Felipe Vasquez',
                titulo: 'RxJS 101',
                desc: 'La idea de la charla es mostrar las bondades de la programa reactiva en Javascript usando  RxJS y algunos de los operadores más utiles que podrian usar en sus proyectos',
                imagem: '../../../assets/img/juanfe.jpg'
            },
            {
                dia: 'Miercoles',
                hora: '06:30pm - 7:00pm',
                nome: 'Laura Ciro',
                titulo: 'Mastering web components: Without any framework',
                desc: "Let's figured out what we can do with the new web components",
                imagem: '../../../assets/img/laura256.jpeg'
            },
            {
                dia: 'Miercoles',
                hora: '07:30pm - 8:00pm',
                nome: 'Sergio Valencia',
                titulo: 'Error Handling Best Practices',
                desc: 'Every developer wants to write code that works. And a lot of times, chances of your program running as expected reduces to one thing: errors.',
                imagem: '../../../assets/img/sergio.jpg'
            },
            {
                dia: 'Miercoles',
                hora: '08:00pm - 8:30pm',
                nome: 'Alvaro Agamez',
                titulo: 'How to implement data science projects in the real world',
                desc: 'Lecciones aprendidas de tres casos de uso en la implementación de grandes proyectos de datos y análisis para el sector público y privado.',
                imagem: '../../../assets/img/alvaro.jpg'

            }
        ];
    }

}
