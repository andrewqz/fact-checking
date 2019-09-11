import { Routes } from '@angular/router';

import { SearchModule } from './search/search.module';

export const AppRoutes: Routes = [
    {
        path: '',
        component: SearchModule,
        children: [{
            path: '',
            loadChildren: './search/search.module#SearchModule'
        }]
    }, { path: '**', redirectTo: '/error/404' }
];
