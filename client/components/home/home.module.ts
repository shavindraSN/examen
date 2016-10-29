import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './home.routing';

import { HomeComponent } from './home.component';
import { NavBarModule } from '../shared/navbar/navbar.module';
import { ModelPaperModule } from './modelPaper/model-paper.module';
import { TimeModeModule } from './timeMode/time-mode.module';
import { InitModelPaperComponent } from '../initModelPaper/init-model-paper.component';
import { InitQuizPaperComponent } from '../initQuizPaper/init-quiz-paper.component';
import { PaperSummaryComponent } from '../paperSummary/paper-summary.component'

@NgModule({
    imports: [
        CommonModule,
        routing,
        NavBarModule,
        ModelPaperModule,
        TimeModeModule
    ],
    declarations: [
        HomeComponent,
        InitModelPaperComponent,
        InitQuizPaperComponent,
        PaperSummaryComponent
    ],
    bootstrap: [
        HomeComponent
    ]
})
export class HomeModule { }