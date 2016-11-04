import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAuth } from "angular2-jwt";
import { HttpModule } from "@angular/http";
import { NgSemanticModule } from "ng-semantic";
import { FormsModule }   from '@angular/forms';

//----------------- Default imports that comes with the Seed file --------------------
import { AppComponent } from './app.component';
import { routing } from "./routes";
import { ContactModule } from "./components/contact/contact.module";
import { HomeModule } from "./components/home/home.module";
//-----------------------------------------------------------------------------------

import { LoginComponent } from './components/login/login.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgSemanticModule,
        ContactModule,
        HomeModule,
        routing
    ],
    providers: [
        provideAuth({
            globalHeaders: [{ "Content-type": "application/json" }],
            newJwtError: true,
            noTokenScheme: true
        })
    ],
    declarations: [
        AppComponent,
        LoginComponent,
    ],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule {}
