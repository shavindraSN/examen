import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './home.routing';
import { FormsModule }   from '@angular/forms';

import { HomeComponent } from './home.component';
import { NavBarModule } from '../shared/navbar/navbar.module';
import { ModelPaperModule } from './modelPaper/model-paper.module';
import { TimeModeModule } from './timeMode/time-mode.module';
import { InitModelPaperComponent } from '../initModelPaper/init-model-paper.component';
import { InitQuizPaperComponent } from '../initQuizPaper/init-quiz-paper.component';
import { PaperSummaryComponent } from '../paperSummary/paper-summary.component';
import { PaperComponent } from '../paper/paper.component';
import { AddQuestionsComponent } from '../uploadQuestions/addQuestions/add-questions.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing,
        NavBarModule,
        ModelPaperModule,
        TimeModeModule
    ],
    declarations: [
        HomeComponent,
        InitModelPaperComponent,
        InitQuizPaperComponent,
        PaperSummaryComponent,
        PaperComponent,
        AddQuestionsComponent
    ],
    bootstrap: [
        HomeComponent
    ]
})
export class HomeModule { }