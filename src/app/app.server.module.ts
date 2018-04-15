import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';

// Materialize
import {MaterializeModule} from 'angular2-materialize';
import {CoreModule} from "./core/core.module";
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        ServerModule,
        MaterializeModule,
        CoreModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppServerModule { }