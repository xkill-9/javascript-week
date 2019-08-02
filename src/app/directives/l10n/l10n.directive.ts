import {
    Directive,
    ElementRef,
    Renderer2,
    Input,
    ViewContainerRef,
    AfterViewInit
} from "@angular/core";

@Directive({
    selector: "[appLocalize]"
})
export class L10nDirective implements AfterViewInit {
    private lang = "es";
    @Input() appLocalizeIf: string;

    private dict = {
        en: {
            "de Agosto": "August",
            12: "20th",
            16: "24th",
            al: "to",
            Registro: "Register",
            "Código de conducta": "Code of conduct",
            "Postularme como speaker": "I want to be a speaker",
            "¿Quieres ser parte de este evento?":
                "Do you like to part of this?",
            "12 de agosto": "august 12th",
            AGENDA: "AGENDA",
            "Registro de asistentes": "Attendee Registration",
            "Bienvenida y keynote": "Welcome and keynote",
            "Charla de invitado especial #1": "Special guest #1 talk",
            "Charla de invitado especial #2": "Special guest #2 talk",
            "Charla de invitado especial #3": "Special guest #3 talk",
            "Charla de invitado especial #4": "Special guest #4 talk",
            "Cierre de evento y 🍻": "Event closure and 🍻",
            lun: "Mon",
            es: "day",
            mar: "Tue",
            tes: "sday",
            mie: "Wed",
            rcoles: "nesday",
            jue: "Thu",
            ves: "rsday",
            vie: "Fri",
            rnes: "day",
            sab: "Sat",
            ado: "urday",
            "Patrocina y organiza": "Sponsored and created by",
            "Comunidades Participantes": "Participating Communities",
            Voluntarios: "Volunteers",
            "¡No te lo pierdas!": "Do not miss it!"
        },
        es: {}
    };

    constructor(private element: ElementRef, private renderer: Renderer2) {
        this.lang = navigator.language.toLowerCase() || "es";
        if (!this.dict[this.lang] && this.dict[this.lang.split("-")[0]]) {
            this.lang = this.lang.split("-")[0];
        }
    }

    ngAfterViewInit(): void {
        const childElements = this.element.nativeElement.childNodes;
        childElements.forEach((child: any, index: number) => {
            if (this.appLocalizeIf) {
                if (this.appLocalizeIf !== this.lang) {
                    this.element.nativeElement.style.display = "none";
                }
                if (child.nodeName === "#text") {
                    const text = this.renderer.createText(
                        this.getTranslation(child)
                    );
                    this.renderer.insertBefore(
                        this.element.nativeElement,
                        text,
                        this.renderer.nextSibling(child)
                    );
                    this.renderer.removeChild(
                        this.element.nativeElement,
                        child
                    );
                }
            } else {
                if (child.nodeName === "#text") {
                    this.renderer.removeChild(
                        this.element.nativeElement,
                        child
                    );
                    const text = this.renderer.createText(
                        this.getTranslation(child)
                    );
                    this.renderer.appendChild(this.element.nativeElement, text);
                }
            }
        });
    }

    ngOnInit() {}

    private getTranslation(value: any): string {
        const short = value.textContent.trim();
        const res = this.dict[this.lang][short] || value.textContent.trim();
        const result = value.textContent.replace(value.textContent.trim(), res);
        console.log(result);
        return result;
    }
}
