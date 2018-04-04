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
                imagem: '../../../../assets/img/carlosangulo.jpg',
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
                imagem: '../../../../assets/img/man.png',
                redes: {
                    github: 'https://github.com/',
                    facebook: 'https://facebook.com/',
                    twitter: 'https://twitter.com/'
                },
                bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non faucibus tortor. Sed id tempor libero, at pharetra elit. In gravida diam augue, at cursus leo porttitor non. Ut aliquet vehicula metus. In vel tortor iaculis, tincidunt ipsum in, egestas justo. Quisque placerat ornare leo eget vulputate.'
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
                imagem: '../../../../assets/img/man.png',
                redes: {
                    github: 'https://github.com/',
                    facebook: 'https://facebook.com/',
                    twitter: 'https://twitter.com/'
                },
                bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non faucibus tortor. Sed id tempor libero, at pharetra elit. In gravida diam augue, at cursus leo porttitor non. Ut aliquet vehicula metus. In vel tortor iaculis, tincidunt ipsum in, egestas justo. Quisque placerat ornare leo eget vulputate.'
            },
            {
                nome: 'Alvaro',
                sobrenome: 'Agamez',
                imagem: '../../../../assets/img/man.png',
                redes: {
                    github: 'https://github.com/',
                    facebook: 'https://facebook.com/',
                    twitter: 'https://twitter.com/'
                },
                bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non faucibus tortor. Sed id tempor libero, at pharetra elit. In gravida diam augue, at cursus leo porttitor non. Ut aliquet vehicula metus. In vel tortor iaculis, tincidunt ipsum in, egestas justo. Quisque placerat ornare leo eget vulputate.'
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
                bio: 'Practice Lead Hybrid Apps - Globant, GDG Medellín Organizer'
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
