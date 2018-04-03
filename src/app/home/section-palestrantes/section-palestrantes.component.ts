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
                    //facebook: 'https://facebook.com/wgbnn',
                    twitter: 'https://twitter.com/carlosrojas_o'
                },
                bio: 'Google Product Strategy Expert. Web UI en Globant.'
            },
            {
                nome: 'Vanessa',
                sobrenome: 'Aristizabal',
                imagem: '../../../../assets/img/vanessa.jpg',
                redes: {
                    //github: 'http://github.com/wgbn',
                    facebook: 'https://www.facebook.com/',
                    twitter: 'https://twitter.com/'
                },
                bio: 'Web UI Developer'
            },
            {
                nome: 'Juan',
                sobrenome: 'Tobon',
                imagem: '../../../../assets/img/man.png',
                redes: {
                    github: 'http://github.com/',
                    facebook: 'https://www.facebook.com/',
                    twitter: 'https://twitter.com/'
                },
                bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non faucibus tortor. Sed id tempor libero, at pharetra elit. In gravida diam augue, at cursus leo porttitor non. Ut aliquet vehicula metus. In vel tortor iaculis, tincidunt ipsum in, egestas justo. Quisque placerat ornare leo eget vulputate.'
            },
            {
                nome: 'Carlos',
                sobrenome: 'Angulo',
                imagem: '../../../../assets/img/man.png',
                redes: {
                    github: 'http://github.com/',
                    facebook: 'https://facebook.com/',
                    twitter: 'https://twitter.com/'
                },
                bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non faucibus tortor. Sed id tempor libero, at pharetra elit. In gravida diam augue, at cursus leo porttitor non. Ut aliquet vehicula metus. In vel tortor iaculis, tincidunt ipsum in, egestas justo. Quisque placerat ornare leo eget vulputate.'
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
                imagem: '../../../../assets/img/man.png',
                redes: {
                    github: 'https://github.com/',
                    facebook: 'https://facebook.com/',
                    twitter: 'https://twitter.com/'
                },
                bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non faucibus tortor. Sed id tempor libero, at pharetra elit. In gravida diam augue, at cursus leo porttitor non. Ut aliquet vehicula metus. In vel tortor iaculis, tincidunt ipsum in, egestas justo. Quisque placerat ornare leo eget vulputate.'
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
