import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
const routes: Routes = [
    {
        path: ' ',
        component: HomeComponent

    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'desenhos', 
        loadChildren: 'app/clientes/desenho.module#DesenhosModule'
    }

];
export const RountingModule = RouterModule.forRoot(routes);