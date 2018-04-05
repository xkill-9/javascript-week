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
                imagem: '../../../assets/img/carlos.jpg'
            },
            {
                dia: 'Martes',
                hora: '06:30 pm - 7:30pm',
                nome: 'Vanessa Aristizabal',
                titulo: 'Angular Material',
                desc: 'Aprenderemos el uso del CDK para crear componentes increíbles y  de alta calidad, usando las características de Angular Material. .',
                imagem: '../../../assets/img/vanessadrive.jpg'
            },
            {
                dia: 'Miércoles',
                hora: '05:30pm - 6:30pm',
                nome: 'Juan Felipe Tobón',
                titulo: 'De Reactive Forms y Otras Delicias',
                desc: 'Aprende a crear formularios dinámicos y profundamente customizados, además de técnicas avanzadas de validación y optimización de manipulación de datos.',
                imagem: '../../../assets/img/juantobon.jpg'
            },
            {
                dia: 'Miércoles',
                hora: '06:30 pm - 7:30pm',
                nome: 'Carlos Angulo',
                titulo: "Let's build your Angular Animations",
                desc: 'Ya que una animación vale más que mil imágenes, aprendamos a transformar tus soluciones en atractivas aplicaciones dinámicas utilizando Angular AnimationBuilder. Comenzando desde cero a través de la comprensión de los principios de animación aplicados a la web, esta charla te guiará con seguridad desde simples ejemplos de transiciones de CSS a la tierra de niveles avanzados donde podrás moverte libremente como un rockstar.',
                imagem: '../../../assets/img/carlosangulo.png'
            },
            {
                dia: 'Jueves',
                hora: '05:30 pm',
                nome: 'Juan Felipe Vasquez',
                titulo: 'Patrones arquitectónicos de CSS para Angular',
                desc: 'Crear estructuras de css escalables, reusables, debugueables y adaptables a las nuevas tendencias tecnológicas.  Comprender los distintos scopes que existen en una app de angular (global y component).  Cómo afecta la especificidad y el performance la estructura de nuestro css',
                imagem: '../../../assets/img/juanfe.jpg'
            },
            {
                dia: 'Jueves',
                hora: '06:30 pm - 7:30pm',
                nome: 'Laura Ciro',
                titulo: 'Change Detection en Angular',
                desc: 'Co-organizadora en @Pioneras-Dev , Rails Girls Med, NgGirls Med.Desarrolladora en Yuxi Global.‍ Me encanta el código, la música y la poesía, voy des-aprendiendo lo establecido, dando cabida a nuevas ideas/perspectivas y priorizando siempre la libertad, aprendiendo siempre de todxs y agradeciéndolo.',
                imagem: '../../../assets/img/laura256.jpeg'
            },
            {
                dia: 'Viernes',
                hora: '05:30pm - 6:30pm',
                nome: 'Sergio Vakebcua',
                titulo: 'Arquitectura de Datos con Observables.',
                desc: 'Aprende que es el patrón observer y la programación reactiva, las ventajas que nos ofrecen, ejemplos de su uso con RxJS  y  de su implementación con angular.',
                imagem: '../../../assets/img/sergio.jpg'
            },
            {
                dia: 'Viernes',
                hora: '06:30 pm - 7:30pm',
                nome: 'Alvaro Agamez',
                titulo: 'Observable Data Services',
                desc: 'Se aprenderán conceptos de alto nivel sobre Observables y cómo construir servicios alrededor de las funcionalidades que estos nos ofrecen.',
                imagem: '../../../assets/img/alvaro.jpg'
            },
            {
                dia: 'Sábado',
                hora: '09:00 am - 01:00 pm',
                nome: 'Sebastian Gomez',
                titulo: 'IONIC + TDD + PWA',
                desc: 'Aprenderán desde cero hasta avanzado Unit Testing para Angular5/Ionic3 con PWA de fondo.',
                imagem: '../../../assets/img/sebastian.jpg'
            }
        ];
    }

    setSection(): void {
        if (sessionStorage.getItem('sectionAgenda') === null) {
            sessionStorage.setItem('sectionAgenda', 'true');
            ga('send', 'event', 'Navegación', 'Visualización', 'Vió la agenda');
        }
    }

}
