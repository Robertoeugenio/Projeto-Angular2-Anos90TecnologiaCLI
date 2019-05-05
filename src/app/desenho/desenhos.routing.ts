import { Routes, RouterModule } from '@angular/router';
import { DesenhoListComponent } from './desenho-list/desenho-list.component';
import { DesenhoFormComponent } from './desenho-form/desenho-form.component';

const DESENHOS_ROUTES: Routes = [
 { path: '', 
    component: DesenhoFormComponent
 }

];

export const  desenhosRouting = RouterModule.forChild(DESENHOS_ROUTES);
