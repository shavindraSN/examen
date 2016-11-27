import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login',  component: LoginComponent},
    { path: 'registration', component: RegistrationComponent}
];

export const routing = RouterModule.forRoot(routes, { useHash: true });