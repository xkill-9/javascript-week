import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-section-palestrantes',
    templateUrl: './section-palestrantes.component.html',
    styleUrls: ['./section-palestrantes.component.scss']
})
export class SectionPalestrantesComponent implements OnInit {

    palestrantes: Array<any> = [];

    constructor() { }

    ngOnInit() {
        this.palestrantes = [
            {
                nome: 'Carlos',
                sobrenome: 'Rojas',
                imagem: '../../../../assets/img/carlos.jpg',
                redes: {
                    github: 'http://github.com/carlosrojaso',
                    facebook: 'https://www.facebook.com/carlosrojas84',
                    twitter: 'https://twitter.com/carlosrojas_o'
                },
                bio: 'Google Product Strategy Expert.  Web UI en Globant.  Interesado principalmente en Progressive Web Apps, Angular y Firebase. En mi tiempo libre escribo libros y hago videos en Youtube.'
            },
            {
                nome: 'Vanessa',
                sobrenome: 'Aristizabal',
                imagem: '../../../../assets/img/vanessadrive.jpg',
                redes: {
                    github: 'http://github.com/vanessamarely',
                    facebook: 'https://www.facebook.com/vane.m.angel',
                    twitter: 'https://twitter.com/vanessamarely'
                },
                bio: 'Soy ingeniera de Sistemas, trabajo como Web UI en Globant. Tengo 6 años de experiencia como Web Developer. Apasionada por la tecnología, los libros y el Anime.'
            },
            {
                nome: 'Juan',
                sobrenome: 'Tobon',
                imagem: '../../../../assets/img/juantobon.jpg',
                redes: {
                    github: 'http://github.com/juantobongt',
                    //facebook: 'https://www.facebook.com/',
                    twitter: 'https://twitter.com/juantobongt'
                },
                bio: 'Web UI Developer en Globant, con 6 años de experiencia en desarrollo Front-End. Apasionado por la creación de experiencias digitales atractivas, la música y las artes visuales.'
            },
            {
                nome: 'Carlos',
                sobrenome: 'Angulo',
                imagem: '../../../../assets/img/carlosangulo.png',
                redes: {
                    github: 'http://github.com/',
                    facebook: 'https://facebook.com/',
                    twitter: 'https://twitter.com/'
                },
                bio: 'Diseñador Industrial, Desarrollador Front-End, web, multimedia, animador.'
            },
            {
                nome: 'Juan',
                sobrenome: 'Vasquez',
                imagem: '../../../../assets/img/juanfe.jpg',
                redes: {
                    github: 'https://github.com/',
                    facebook: 'https://facebook.com/',
                    twitter: 'https://twitter.com/'
                },
                bio: 'Soy Juanfe Vásquez, padre de familia (1 hijo y 4 perros) y fanático de libros de ciencia ficción.  En mi carrera profesional me he desempeñado como UX Designer, Profesor, Líder de Área y Front-End Developer.'
            },
            {
                nome: 'Laura',
                sobrenome: 'Ciro',
                imagem: '../../../assets/img/laura256.jpeg',
                redes: {
                    github: 'https://github.com/',
                    facebook: 'https://facebook.com/',
                    twitter: 'https://twitter.com/'
                },
                bio: 'Co-organizadora en @Pioneras-Dev , Rails Girls Med, NgGirls Med.Desarrolladora en Yuxi Global.‍ Me encanta el código, la música y la poesía, voy des-aprendiendo lo establecido, dando cabida a nuevas ideas/perspectivas y priorizando siempre la libertad, aprendiendo siempre de todxs y agradeciéndolo.'
               
            },
            {
                nome: 'Sergio',
                sobrenome: 'Valencia',
                imagem: '../../../../assets/img/sergio.jpg',
                redes: {
                    github: 'https://github.com/sergio9104'
                },
                bio: 'Soy Web UI developer developer en Globant con experiencia desarrollando múltiples aplicaciones en angular y react. Fanático de los libros y las nuevas tecnologías.'
            },
            {
                nome: 'Alvaro',
                sobrenome: 'Agamez',
                imagem: '../../../../assets/img/alvaro.jpg',
                redes: {
                    github: 'https://github.com/',
                    facebook: 'https://facebook.com/',
                    twitter: 'https://twitter.com/'
                },
                bio: 'Fullstack developer, JavaScript Lover, dogs lover, curious, restless, a night soul.'
            },
            {
                nome: 'Sebastian',
                sobrenome: 'Gomez',
                imagem: '../../../../assets/img/sebastian.jpg',
                redes: {
                    github: 'https://github.com/seagomezar',
                    //facebook: 'https://facebook.com/',
                    twitter: 'https://twitter.com/sebasgojs'
                },
                bio: 'Soy ingeniero de sistemas e Informática y Magister en Ingeniería de Sistemas de la Universidad Nacional de Colombia. Soy Practice Lead Hybrid Apps en Globant y Organizo el GDG Medellín'
            },
        ];
    }

    setSection(): void {
        if (sessionStorage.getItem('sectionPalestrantes') === null) {
            sessionStorage.setItem('sectionPalestrantes', 'true');
            ga('send', 'event', 'Navegação', 'Visualizou', 'Rolou até os palestrantes');
        }
    }

}
