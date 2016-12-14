import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './home.routing';
import { FormsModule }   from '@angular/forms';

import { GraphModule } from '../shared/graph/graph.module';
import { HomeComponent } from './home.component';
import { NavBarModule } from '../shared/navbar/navbar.module';
import { ModelPaperModule } from './modelPaper/model-paper.module';
import { TimeModeModule } from './timeMode/time-mode.module';
import { InitModelPaperComponent } from '../initModelPaper/init-model-paper.component';
import { InitQuizPaperComponent } from '../initQuizPaper/init-quiz-paper.component';
import { PaperSummaryComponent } from '../paperSummary/paper-summary.component';
import { PaperComponent } from '../paper/paper.component';
import { AddQuestionsComponent } from '../uploadQuestions/addQuestions/add-questions.component';
import { ProfileComponent } from '../profile/profile.component';
import { ResultsComponent } from '../results/results.component';
import { HistoryComponent } from '../history/history.component'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routing,
        NavBarModule,
        GraphModule,
        ModelPaperModule,
        TimeModeModule
    ],
    declarations: [
        HomeComponent,
        InitModelPaperComponent,
        InitQuizPaperComponent,
        PaperSummaryComponent,
        PaperComponent,
        ProfileComponent,
        AddQuestionsComponent,
        ResultsComponent,
        HistoryComponent
    ],
    bootstrap: [
        HomeComponent
    ]
})
export class HomeModule { }