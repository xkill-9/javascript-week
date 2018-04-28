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
                hora: '05:30pm - 6:30pm',
                nome: 'Carlos Rojas',
                titulo: 'Arquitectura de Apps escalables en Angular',
                desc: 'Aprenderemos como aplicar los patrones de diseño con los bloques de construcción de Angular para proyectos pensados en tener mas de 100 componentes.',
                imagem: '../../../assets/img/carlos.jpg',
                slides: 'https://slides.com/carlosrojas_o/angular-week-2018#/',
                video: 'https://youtu.be/62EtV33NWmc?t=25m25s'
            },
            {
                dia: 'Martes',
                hora: '06:30 pm - 7:30pm',
                nome: 'Vanessa Aristizabal',
                titulo: 'Angular Material',
                desc: 'Aprenderemos el uso del CDK para crear componentes increíbles y  de alta calidad, usando las características de Angular Material. .',
                imagem: '../../../assets/img/vanessadrive.jpg',
                slides: 'https://slides.com/vanessamarely/angular-week-2018-3#/',
                repo: 'https://github.com/vanessamarely/angular-material-cdk',
                video: 'https://youtu.be/62EtV33NWmc?t=45m45s'
            },
            {
                dia: 'Miércoles',
                hora: '05:30pm - 6:30pm',
                nome: 'Juan Felipe Tobón',
                titulo: 'De Reactive Forms y Otras Delicias',
                desc: 'Aprende a crear formularios dinámicos y profundamente customizados, además de técnicas avanzadas de validación y optimización de manipulación de datos.',
                imagem: '../../../assets/img/juantobon.jpg',
                slides: 'https://slides.com/juantobongt/reactive-forms-y-otras-delicias#/',
                repo: 'https://github.com/juantobongt/ng-form-examples',
                video: 'https://youtu.be/mPMIFaVHLlY?t=11m24s'
            },
            {
                dia: 'Miércoles',
                hora: '06:30 pm - 7:30pm',
                nome: 'Carlos Angulo',
                titulo: "Let's build your Angular Animations",
                desc: 'Ya que una animación vale más que mil imágenes, aprendamos a transformar tus soluciones en atractivas aplicaciones dinámicas utilizando Angular AnimationBuilder. Comenzando desde cero a través de la comprensión de los principios de animación aplicados a la web, esta charla te guiará con seguridad desde simples ejemplos de transiciones de CSS a la tierra de niveles avanzados donde podrás moverte libremente como un rockstar.',
                imagem: '../../../assets/img/carlosangulo.png',
                slides: 'https://slides.com/carlosangulo/angular-week-2018',
                repo: 'https://github.com/CarlosAngulo/AnimationBuilder-basics',
                video: 'https://youtu.be/mPMIFaVHLlY?t=1h16m23s'
            },
            {
                dia: 'Jueves',
                hora: '05:30 pm',
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
                repo: 'https://github.com/seagomezar/workshop-ionic-tdd-pwa'
            }
        ];
    }

}
