import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GymsComponent } from './gyms/gyms.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'gyms', component: GymsComponent }
];
