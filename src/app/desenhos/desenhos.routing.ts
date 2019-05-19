import { Routes, RouterModule } from '@angular/router';
import { DesenhoListComponent } from './desenho-list/desenho-list.component';
import { DesenhoFormComponent } from './desenho-form/desenho-form.component';
import { DesenhoCrudComponent } from './desenho-crud/desenho-crud.component';

const DESENHOS_ROUTES: Routes = [
 { path: '', component: DesenhoCrudComponent},
{ path: ':id',   component: DesenhoFormComponent }

];

export const  desenhosRouting = RouterModule.forChild(DESENHOS_ROUTES);
