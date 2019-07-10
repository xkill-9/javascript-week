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
                nome        : 'Cristian Danilo',
                sobrenome   : 'Gutiérrez',
                imagem      : 'https://avatars2.githubusercontent.com/u/22488812?s=460&v=4',
                redes       : {
                    twitter : 'https://twitter.com/danilo1905g',
                    github  : 'https://github.com/CrisDan1905',
                },
                bio         : 'Pendiente...',
            },

            {
                nome        : 'Cesar',
                sobrenome   : 'Suarez',
                imagem      : 'https://pbs.twimg.com/profile_images/1028837466340352000/vSHCLp8E_400x400.jpg',
                redes       : {
                    twitter : 'https://twitter.com/cesarlarsson',
                    github  : 'https://github.com/cesarlarsson',
                },
                bio         : 'Pendiente...',
            },

            {
                nome        : 'Sebastian',
                sobrenome   : 'Gomez',
                imagem      : '../../../../assets/img/sebastian.jpg',
                redes       : {
                    github  : 'https://github.com/seagomezar',
                    twitter : 'https://twitter.com/sebasgojs'
                },
                bio: 'Soy ingeniero de sistemas e Informática y Magister en Ingeniería de Sistemas de la Universidad Nacional de Colombia. Soy Practice Lead Hybrid Apps en Globant y Organizo el GDG Medellín'
            },

            {
                nome        : 'Paula',
                sobrenome   : 'Mazo Cortés',
                imagem      : 'https://avatars2.githubusercontent.com/u/22626905?s=460&v=4',
                redes       : {
                    twitter : 'https://twitter.com/Mazoster',
                    github  : 'https://github.com/pmazoc/',
                },
                bio         : 'Pendiente...',
            },

            {
                nome        : 'Liz',
                sobrenome   : 'Parody',
                imagem      : 'https://pbs.twimg.com/profile_images/1139639950490644486/bkatzR_J_400x400.jpg',
                redes       : {
                    twitter : 'https://twitter.com/lizparody23',
                    github  : 'https://github.com/lizparody',
                },
                bio         : 'Pendiente...',
            },

            {
                nome        : 'Jhonatan',
                sobrenome   : 'Giraldo',
                imagem      : 'https://avatars2.githubusercontent.com/u/6934447?s=460&v=4',
                redes       : {
                    github  : 'https://github.com/Jhonatangiraldo',
                },
                bio         : 'Pendiente...',
            },

            {
                nome        : 'Maria',
                sobrenome   : 'Giraldo',
                imagem      : 'https://pbs.twimg.com/profile_images/451152111603318784/xEAEpNhy_400x400.jpeg',
                redes       : {
                    twitter : 'https://twitter.com/mariadriada',
                    github  : 'https://github.com/mariadriada',
                },
                bio         : 'Pendiente...',
            },

            {
                nome        : 'Andrea',
                sobrenome   : 'Cordoba',
                imagem      : 'https://pbs.twimg.com/profile_images/1049677834233569280/HmztucNe_400x400.jpg',
                redes       : {
                    twitter : 'https://twitter.com/lua_andre',
                    github  : 'https://github.com/andre-code',
                },
                bio         : 'Pendiente...',
            },

            {
                nome        : 'Sergio',
                sobrenome   : 'Valencia',
                imagem      : 'https://pbs.twimg.com/profile_images/1002982260633718784/NxIQNR6L_400x400.jpg',
                redes       : {
                    twitter : 'https://twitter.com/sergio91044',
                    github  : 'https://github.com/sergio9104',
                },
                bio         : 'Pendiente...',
            },

            {
                nome        : 'Johann Paul',
                sobrenome   : 'Echavarría Zapata',
                imagem      : 'https://pbs.twimg.com/profile_images/954018981244997632/J_3DPptq_400x400.jpg',
                redes       : {
                    twitter : 'https://twitter.com/abrupto',
                    github  : 'https://github.com/katio',
                },
                bio         : 'Pendiente...',
            },

            {
                nome        : 'Juan Camilo',
                sobrenome   : 'Diaz Ortega',
                imagem      : 'https://pbs.twimg.com/profile_images/1055300540912074752/Ar7V9bTV_400x400.jpg',
                redes       : {
                    twitter : 'https://twitter.com/jcamilodo',
                },
                bio         : 'Data Architect en Globant, mas de 18 años de experiencia en desarrollo de software, apasionado de los lenguajes de programacion, desarrollo de Video Games, Machine Learning y del Big Data y todo lo que se ha venido desarrollando con estos.',
            },

            {
                nome        : 'Santiago',
                sobrenome   : 'Angee',
                imagem      : 'https://media.licdn.com/dms/image/C4E03AQHaatAfDs50yg/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=Q_98s7WCThknbFP7X-_uuMqefTBNViRkgruDSOwv1Og',
                redes       : {

                },
                bio         : 'Hermano de dos hermosos gatos, amante de los gatos y los perros, la cerveza y el kebab. Data Architect, orgullosamente Glober, políglota, Ingeniero de Sistemas de la Universidad EAFIT, Magíster en ingeniería de la misma Universidad.',
            },

            {
                nome        : 'Jose Luis',
                sobrenome   : 'Sepulveda',
                imagem      : 'https://media.licdn.com/dms/image/C4E03AQGTcpM7mQrbOQ/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=JpeFtTxUt1gNx-Z-YwvjRjBswO5A-MfW3EA7YdIBQ8c',
                redes       : {

                },
                bio         : 'Big data architect at Globant, 10 anos de experiencia en el desarrollo.',
            },

            {
                nome        : 'Hilder',
                sobrenome   : 'Umaña',
                imagem      : 'https://media.licdn.com/dms/image/C5603AQES0jyuwDLjkA/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=0RnLek0grfu4s0wRs32Z741oKrdyWzbZ0oqFqCelE4s',
                redes       : {

                },
                bio         : 'BI Architect con más de 17 años de experiencia en Business Intelligence y análisis de datos, trabajado para sectores de banca, retail, financiero, seguros',
            },

            {
                nome        : 'Danny',
                sobrenome   : 'Cabezas',
                imagem      : 'https://media.licdn.com/dms/image/C4E03AQFvAycVIAa9nA/profile-displayphoto-shrink_800_800/0?e=1568246400&v=beta&t=btdzaiy420Vj3z7Tx_KhlHhgpy2f5eY-OIb0Dlk6ew8',
                redes       : {

                },
                bio         : 'Desarrollador con mas de 10 anos de experiencia en Python. Ademas del desarrollo, mi otra pasion es la Seguridad informatica.',
            },
        ];
    }

}
