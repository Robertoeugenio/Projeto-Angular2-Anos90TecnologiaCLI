import { Routes, RouterModule } from '@angular/router';
import { DesenhoListComponent } from './desenho-list/desenho-list.component';

const DESENHOS_ROUTES: Routes = [
 { path: '', 
    component: DesenhoListComponent
 }

];

export const  desenhosRouting = RouterModule.forChild(DESENHOS_ROUTES);
