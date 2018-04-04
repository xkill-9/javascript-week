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
                hora: '05:30 pm',
                nome: 'Carlos Rojas',
                titulo: 'Arquitectura de Apps escalables en Angular',
                desc: 'Te ha pasado que llegas a un proyecto legado en Angular y debes escalarlo entrando en conflicto con varios problemas de rendimiento y diseño que podrían ser evitados en el inicio?  El UI ha evolucionado mucho en los últimos años haciendo que sea cada vez mas importante conocer patrones de diseño y como aplicarlos a un proyecto que esta pensado a mantenerse varios años.  En esta charla aprenderemos como aplicar los patrones de diseño con los bloques de construcción de Angular para proyectos pensados en tener mas de 100 componentes.',
                imagem: '../../../assets/img/carlos.jpg'
            },
            {
                dia: 'Martes',
                hora: '06:30',
                nome: 'Angular Material',
                titulo: 'Angular Material',
                desc: 'Material Design, es un lenguaje visual dirigido a los usuarios que permite unificar la experiencia en las diferentes plataformas y tamaños de dispositivos. Angular Material, es la adaptación de esta guía en Angular. El objetivo de la charla es dar a conocer los principios de esta guía de diseño en Angular, sus componentes y como esta herramienta nos permite realizar aplicaciones usables; sin tener que tener conocimientos previos en diseño web. Además de conocer algunas alternativas a Angular Material.',
                imagem: '../../../assets/img/vanessadrive.jpg'
            },
            {
                dia: 'Miercoles',
                hora: '05:30 pm',
                nome: 'Tuane Paixão',
                titulo: 'De Reactive Forms y Otras Delicias',
                desc: 'Aprende a crear formularios dinámicos y profundamente customizados, además de técnicas avanzadas de validación y optimización de manipulación de datos.',
                imagem: '../../../assets/img/juantobon.jpg'
            },
            {
                dia: 'Miercoles',
                hora: '6:30',
                nome: 'Walter Gandarella',
                titulo: 'Animation Builder',
                desc: 'Angular Medellin',
                imagem: '../../../assets/img/carlosangulo.jpg'
            },
            {
                dia: 'Jueves',
                hora: '05:30 pm',
                nome: 'Jonata Weber',
                titulo: 'Patrones arquitectónicos de CSS para Angular',
                desc: 'Crear estructuras de css escalables, reusables, debugueables y adaptables a las nuevas tendencias tecnológicas.  Comprender los distintos scopes que existen en una app de angular (global y component).  Cómo afecta la especificidad y el performance la estructura de nuestro css',
                imagem: '../../../assets/img/man.png'
            },
            {
                dia: 'Jueves',
                hora: '06:30 pm',
                nome: 'Laura Ciro',
                titulo: 'Change Detection en Angular',
                desc: 'Co-organizadora en @Pioneras-Dev , Rails Girls Med, NgGirls Med.Desarrolladora en Yuxi Global.‍ Me encanta el código, la música y la poesía, voy des-aprendiendo lo establecido, dando cabida a nuevas ideas/perspectivas y priorizando siempre la libertad, aprendiendo siempre de todxs y agradeciéndolo.',
                imagem: '../../../assets/img/laura256.jpeg'
            },
            {
                dia: 'Viernes',
                hora: '05:30 pm',
                nome: 'Jonata Weber',
                titulo: 'Arquitectura de Datos con Observables.',
                desc: 'Aprenderán que son los Observables y qué es Reactive Programming',
                imagem: '../../../assets/img/man.png'
            },
            {
                dia: 'Viernes',
                hora: '06:30 pm',
                nome: 'Jonata Weber',
                titulo: 'Observable Data Services',
                desc: 'Se aprenderán conceptos de alto nivel sobre Observables y cómo construir servicios alrededor de las funcionalidades que estos nos ofrecen.',
                imagem: '../../../assets/img/man.png'
            },
            {
                dia: 'Sabado',
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
            ga('send', 'event', 'Navegação', 'Visualizou', 'Rolou até a agenda');
        }
    }

}
