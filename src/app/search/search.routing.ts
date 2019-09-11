import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ResultsComponent } from './results/results.component';

export const searchRoutes: Routes = [
    {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
    },
    {
        path: 'search',
        component: ResultsComponent,
        data: {
            heading: 'Inicio'
        }
    },
    {
        path: 'search/results',
        component: ResultsComponent,
        data: {
            heading: 'Resultados'
        }
    },
    {
        path: '**',
        redirectTo: 'error/404'
    }
];
