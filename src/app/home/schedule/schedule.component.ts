import { Component, OnInit, HostListener } from "@angular/core";

@Component({
    selector: "app-schedule",
    templateUrl: "./schedule.component.html",
    styleUrls: ["./schedule.component.scss"]
})
export class ScheduleComponent implements OnInit {
    schedule: any = {};
    selectedDay = "lunes";
    objectKeys = Object.keys;
    constructor() {}

    ngOnInit() {
        this.schedule = {
            lunes: {
                day: "lunes",
                date: "12 de agosto",
                events: [
                    {
                        type: "talk",
                        title: "Registro de asistentes",
                        subtitle: "",
                        date: "5:00 PM"
                    },
                    {
                        type: "talk",
                        title: "Bienvenida y keynote",
                        subtitle: "",
                        date: "6:00 PM"
                    },
                    {
                        type: "talk",
                        title: "Flash talk #1",
                        subtitle: "",
                        date: "6:15 PM"
                    },
                    {
                        type: "break",
                        title: "BREAK",
                        date: "6:40 PM"
                    },
                    {
                        type: "talk",
                        title: "Charla de invitado especial #1",
                        subtitle: "",
                        date: "7:00 PM"
                    }
                ]
            },
            martes: {
                day: "martes",
                date: "13 de agosto",
                events: [
                    {
                        type: "talk",
                        title: "Registro de asistentes",
                        subtitle: "",
                        date: "5:45 PM"
                    },
                    {
                        type: "talk",
                        title: "Flash talk #2",
                        subtitle: "",
                        date: "6:15 PM"
                    },
                    {
                        type: "break",
                        title: "BREAK",
                        date: "6:40 PM"
                    },
                    {
                        type: "talk",
                        title: "Charla de invitado especial #2",
                        subtitle: "",
                        date: "7:00 PM"
                    }
                ]
            },
            miercoles: {
                day: "miercoles",
                date: "14 de agosto",
                events: [
                    {
                        type: "talk",
                        title: "Registro de asistentes",
                        subtitle: "",
                        date: "5:45 PM"
                    },
                    {
                        type: "talk",
                        title: "Flash talk #3",
                        subtitle: "",
                        date: "6:15 PM"
                    },
                    {
                        type: "break",
                        title: "BREAK",
                        date: "6:40 PM"
                    },
                    {
                        type: "talk",
                        title: "Charla de invitado especial #3",
                        subtitle: "",
                        date: "7:00 PM"
                    }
                ]
            },
            jueves: {
                day: "jueves",
                date: "15 de agosto",
                events: [
                    {
                        type: "talk",
                        title: "Registro de asistentes",
                        subtitle: "",
                        date: "5:45 PM"
                    },
                    {
                        type: "talk",
                        title: "Flash talk #4",
                        subtitle: "",
                        date: "6:15 PM"
                    },
                    {
                        type: "break",
                        title: "BREAK",
                        date: "6:40 PM"
                    },
                    {
                        type: "talk",
                        title: "Charla de invitado especial #4",
                        subtitle: "",
                        date: "7:00 PM"
                    }
                ]
            },
            viernes: {
                day: "viernes",
                date: "16 de agosto",
                events: [
                    {
                        type: "talk",
                        title: "Registro de asistentes",
                        subtitle: "",
                        date: "5:30 PM"
                    },
                    {
                        type: "talk",
                        title: "Workshop",
                        subtitle: "",
                        date: "6:00 PM"
                    },
                    {
                        type: "talk",
                        title: "Cierre de evento y 🍻",
                        subtitle: "",
                        date: "8:00 PM"
                    }
                ]
            }
        };
    }
}
