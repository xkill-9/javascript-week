import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'app-section-agenda',
    templateUrl: './section-agenda.component.html',
    styleUrls: ['./section-agenda.component.scss'],
})
export class SectionAgendaComponent implements OnInit {
    schedule: any = {};
    selectedDay = 'lunes';
    objectKeys = Object.keys;
    constructor() {}

    ngOnInit() {
        this.schedule = {
            lunes: {
                day: 'lunes',
                date: '12 de agosto',
                events: [
                    {
                        type: 'talk',
                        title: 'How to implement NodeJS Apps in the real world',
                        subtitle:
                            'This is some text that explains what the talk is about',
                        date: '6:00 AM',
                    },
                    {
                        type: 'break',
                        title: 'BREAK',
                        date: '9:00 AM',
                    },
                    {
                        type: 'talk',
                        title: 'How to implement NodeJS Apps in the real world',
                        subtitle:
                            'This is some text that explains what the talk is about',
                        date: '6:00 AM',
                    },
                    {
                        type: 'talk',
                        title: 'How to implement NodeJS Apps in the real world',
                        subtitle:
                            'This is some text that explains what the talk is about',
                        date: '6:00 AM',
                    },
                ],
            },
            martes: {
                day: 'martes',
                date: '13 de agosto',
                events: [
                    {
                        type: 'break',
                        title: 'BREAK',
                        date: '9:00 AM',
                    },
                    {
                        type: 'talk',
                        title: 'How to implement NodeJS Apps in the real world',
                        subtitle:
                            'This is some text that explains what the talk is about',
                        date: '6:00 AM',
                    },
                    {
                        type: 'break',
                        title: 'BREAK',
                        date: '9:00 AM',
                    },
                ],
            },
            miercoles: {
                day: 'miercoles',
                date: '14 de agosto',
                events: [],
            },
            jueves: {
                day: 'jueves',
                date: '15 de agosto',
                events: [],
            },
            viernes: {
                day: 'viernes',
                date: '16 de agosto',
                events: [],
            },
        };
    }
}
