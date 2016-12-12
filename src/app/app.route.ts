import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { UserComponent } from './user/user.component'

export const appRoutes: Routes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }, {
        path: 'home',
        component: HomeComponent
    }, {
        path: 'user/:user',
        component: UserComponent
    }

];
