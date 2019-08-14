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
                name: 'Adrian Estrada',
                title: 'Tech Manager',
                picture:
                    'https://s.gravatar.com/avatar/b6e74cc5bf30b12fe6346c6b4ba3db25?s=400&r=g',
                bio:
                    'Developer in love with Node.js, thirsty for new technologies, working at @NodeSource, official Node.js core Collaborator,  organizer at @MedellinJS',
            },
            {
                name: 'Diego Valderrama',
                title: 'Tech Manager',
                picture: '../../../../assets/img/man.png',
                bio:
                    "Here is where i'd put the bio ... if i had one! (ノಠ益ಠ)ノ彡┻━┻",
            },
            {
                name: 'Oscar Granada',
                title: 'Tech Manager',
                picture: '../../../../assets/img/oscarGranada.png',
                bio:
                    "Here is where i'd put the bio ... if i had one! (ノಠ益ಠ)ノ彡┻━┻",
            },
            {
                name: 'Alejandro Peña',
                title: 'Tech Manager',
                picture: '../../../../assets/img/man.png',
                bio:
                    "Here is where i'd put the bio ... if i had one! (ノಠ益ಠ)ノ彡┻━┻",
            },
            {
                name: 'Olga Saucedo',
                title: 'Tech Manager',
                picture: '../../../../assets/img/man.png',
                bio:
                    "Here is where i'd put the bio ... if i had one! (ノಠ益ಠ)ノ彡┻━┻",
            },
            {
                name: 'Ana Sosa',
                title: 'Tech Manager',
                picture: '../../../../assets/img/anaSosa.png',
                bio:
                    "Here is where i'd put the bio ... if i had one! (ノಠ益ಠ)ノ彡┻━┻",
            },
            {
                name: 'David Montoya',
                title: 'Tech Manager',
                picture: '../../../../assets/img/man.png',
                bio:
                    "Here is where i'd put the bio ... if i had one! (ノಠ益ಠ)ノ彡┻━┻",
            },
        ];
    }
}
