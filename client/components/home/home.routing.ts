import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { InitModelPaperComponent } from '../initModelPaper/init-model-paper.component';
import { InitQuizPaperComponent } from '../initQuizPaper/init-quiz-paper.component';
import { PaperSummaryComponent } from '../paperSummary/paper-summary.component';
import { PaperComponent } from '../paper/paper.component';
import { AddQuestionsComponent } from '../uploadQuestions/addQuestions/add-questions.component';
import { ProfileComponent } from '../profile/profile.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'initmodelpaper', component: InitModelPaperComponent },
    { path: 'initquizpaper', component: InitQuizPaperComponent },
    { path: 'papersummary', component: PaperSummaryComponent },
    { path: 'initquizpaper/paper/:subid/:time', component: PaperComponent},
    { path: 'addquestions', component:AddQuestionsComponent },
    { path: 'profile', component:ProfileComponent }
];

export const routing = RouterModule.forChild(routes);