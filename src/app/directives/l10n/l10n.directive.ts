import {
    Directive,
    ElementRef,
    Renderer2,
    Input,
    ViewContainerRef,
    AfterViewInit,
    OnChanges,
    DoCheck
} from "@angular/core";

@Directive({
    selector: "[appLocalize]"
})
export class L10nDirective implements AfterViewInit, OnChanges, DoCheck {
    private lang = "es";
    @Input() appLocalizeIf: string;
    @Input() appLocalizeValue: string;

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
            "Cierre de evento": "Event closure",
            "20 de agosto": "August 20th",
            "21 de agosto": "August 21th",
            "22 de agosto": "August 22th",
            "23 de agosto": "August 23th",
            "24 de agosto": "August 24th",
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
            "¡No te lo pierdas!": "Do not miss it!",
            "After y 🍻": "After and 🍻"
        },
        es: {}
    };

    constructor(private element: ElementRef, private renderer: Renderer2) {
        this.lang = navigator.language.toLowerCase() || "es";
        const [lang, _] = this.lang.split("-");
        if (!this.dict[this.lang] && this.dict[lang]) {
            this.lang = lang;
        }
    }

    private renderContent(): void {
        if (this.appLocalizeValue) {
            const text = this.renderer.createText(
                this.getTranslation(this.appLocalizeValue)
            );
            this.element.nativeElement.childNodes.forEach(node => {
                this.renderer.removeChild(this.element.nativeElement, node);
            });
            this.renderer.appendChild(this.element.nativeElement, text);
        } else {
            const childElements = this.element.nativeElement.childNodes;
            childElements.forEach((child: any) => {
                if (this.appLocalizeIf) {
                    if (this.appLocalizeIf !== this.lang) {
                        this.element.nativeElement.style.display = "none";
                    }
                    if (child.nodeName === "#text") {
                        const text = this.renderer.createText(
                            this.getTranslation(child.textContent)
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
                            this.getTranslation(child.textContent)
                        );
                        this.renderer.appendChild(
                            this.element.nativeElement,
                            text
                        );
                    }
                }
            });
        }
    }

    ngOnChanges(/* changes: SimpleChanges */): void {
        this.renderContent();
    }

    ngAfterViewInit(): void {
        this.renderContent();
    }

    private getTranslation(text: any): string {
        if (
            !text ||
            Object.prototype.toString.call(text).indexOf("String") === -1
        ) {
            text = "";
        }
        const short = text.trim();
        const res = this.dict[this.lang][short] || text.trim();
        const result = text.replace(text.trim(), res);
        return result;
    }
}
