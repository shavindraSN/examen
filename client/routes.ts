import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login',  component: LoginComponent},
];

export const routing = RouterModule.forRoot(routes, { useHash: true });