import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { InitModelPaperComponent } from '../initModelPaper/init-model-paper.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'initmodelpaper', component: InitModelPaperComponent }
];

export const routing = RouterModule.forChild(routes);