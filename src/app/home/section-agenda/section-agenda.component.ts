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
                titulo: 'Patrones arquitectónicos de CSS para Angular',
                desc: 'Crear estructuras de css escalables, reusables, debugueables y adaptables a las nuevas tendencias tecnológicas.  Comprender los distintos scopes que existen en una app de angular (global y component).  Cómo afecta la especificidad y el performance la estructura de nuestro css',
                imagem: '../../../assets/img/juanfe.jpg',
                slides: 'https://slides.com/juanfevasquez/angular-week-2018',
                repo: 'https://github.com/juanfevasquez/CssArchitecturePatternsForNg',
                video: 'https://youtu.be/Y0oDyOQ4Y2o?t=11m38s'
            },
            {
                dia: 'Jueves',
                hora: '06:30 pm - 7:30pm',
                nome: 'Laura Ciro',
                titulo: 'Change Detection en Angular',
                desc: 'Descubramos juntxs la magía detrás de change detection, cómo funciona y algunos tips para mejorar el rendimiento en nuestras aplicaciones.',
                imagem: '../../../assets/img/laura256.jpeg',
                slides: 'https://slides.com/ltciro/angular-week-2018-6',
                repo: 'https://github.com/ltciro/change_detection',
                video: 'https://youtu.be/Y0oDyOQ4Y2o?t=1h16m49s'
            },
            {
                dia: 'Viernes',
                hora: '05:30pm - 6:30pm',
                nome: 'Sergio Valencia',
                titulo: 'Arquitectura de Datos con Observables.',
                desc: 'Aprende que es el patrón observer y la programación reactiva, las ventajas que nos ofrecen, ejemplos de su uso con RxJS  y  de su implementación con angular.',
                imagem: '../../../assets/img/sergio.jpg',
                slides: 'https://slides.com/sergioandresvalenciayepes-1/angular-week-2018#/',
                repo: 'https://github.com/sergio9104/AngularWeek',
                video: 'https://youtu.be/71DMNX-BHmw?t=24m21s'
            },
            {
                dia: 'Viernes',
                hora: '06:30 pm - 7:30pm',
                nome: 'Alvaro Agamez',
                titulo: 'Observable Data Services',
                desc: 'Se aprenderán conceptos de alto nivel sobre Observables y cómo construir servicios alrededor de las funcionalidades que estos nos ofrecen.',
                imagem: '../../../assets/img/alvaro.jpg',
                slides: 'https://slides.com/codemaxter/angular-observable-data-services#/',
                video: 'https://youtu.be/71DMNX-BHmw?t=1h7m11s'

            },
            {
                dia: 'Sábado',
                hora: '09:00 am - 01:00 pm',
                nome: 'Sebastian Gomez',
                titulo: 'IONIC + TDD + PWA',
                desc: 'Aprenderán desde cero hasta avanzado Unit Testing para Angular5/Ionic3 con PWA de fondo.',
                imagem: '../../../assets/img/sebastian.jpg',
                slides: 'https://slides.com/sebastianalonsogomezarias/angular-week-2018#/',
                repo: 'https://github.com/seagomezar/workshop-ionic-tdd-pwa'
            }
        ];
    }

}
