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
                name: 'Gabriel Trujillo',
                title: 'Tech Manager',
                picture: '../../../../assets/img/man.png',
                bio:
                    "Here is where i'd put the bio ... if i had one! (ノಠ益ಠ)ノ彡┻━┻",
            },
            {
                name: 'Gabriel Trujillo',
                title: 'Tech Manager',
                picture: '../../../../assets/img/man.png',
                bio:
                    "Here is where i'd put the bio ... if i had one! (ノಠ益ಠ)ノ彡┻━┻",
            },
            {
                name: 'Gabriel Trujillo',
                title: 'Tech Manager',
                picture: '../../../../assets/img/man.png',
                bio:
                    "Here is where i'd put the bio ... if i had one! (ノಠ益ಠ)ノ彡┻━┻",
            },
            {
                name: 'Gabriel Trujillo',
                title: 'Tech Manager',
                picture: '../../../../assets/img/man.png',
                bio:
                    "Here is where i'd put the bio ... if i had one! (ノಠ益ಠ)ノ彡┻━┻",
            },
            {
                name: 'Gabriel Trujillo',
                title: 'Tech Manager',
                picture: '../../../../assets/img/man.png',
                bio:
                    "Here is where i'd put the bio ... if i had one! (ノಠ益ಠ)ノ彡┻━┻",
            },
            {
                name: 'Gabriel Trujillo',
                title: 'Tech Manager',
                picture: '../../../../assets/img/man.png',
                bio:
                    "Here is where i'd put the bio ... if i had one! (ノಠ益ಠ)ノ彡┻━┻",
            },
            {
                name: 'Gabriel Trujillo',
                title: 'Tech Manager',
                picture: '../../../../assets/img/man.png',
                bio:
                    "Here is where i'd put the bio ... if i had one! (ノಠ益ಠ)ノ彡┻━┻",
            },
            {
                name: 'Gabriel Trujillo',
                title: 'Tech Manager',
                picture: '../../../../assets/img/man.png',
                bio:
                    "Here is where i'd put the bio ... if i had one! (ノಠ益ಠ)ノ彡┻━┻",
            },
            {
                name: 'Gabriel Trujillo',
                title: 'Tech Manager',
                picture: '../../../../assets/img/man.png',
                bio:
                    "Here is where i'd put the bio ... if i had one! (ノಠ益ಠ)ノ彡┻━┻",
            },
            {
                name: 'Gabriel Trujillo',
                title: 'Tech Manager',
                picture: '../../../../assets/img/man.png',
                bio:
                    "Here is where i'd put the bio ... if i had one! (ノಠ益ಠ)ノ彡┻━┻",
            },
        ];
    }
}
