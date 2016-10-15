import { NgModule } from '@angular/core';
import { routing } from './home.routing';

import { HomeComponent } from './home.component';
import { NavBarModule } from '../shared/navbar/navbar.module';
import { ModelPaperModule } from './modelPaper/model-paper.module';
import { TimeModeModule } from './timeMode/time-mode.module';

@NgModule({
    imports: [
        routing,
        NavBarModule,
        ModelPaperModule,
        TimeModeModule
    ],
    declarations: [
        HomeComponent
    ],
    bootstrap: [
        HomeComponent
    ]
})
export class HomeModule { }