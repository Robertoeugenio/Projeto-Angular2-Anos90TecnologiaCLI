import { Routes, RouterModule } from '@angular/router';
import { SerieantigaListComponent } from './serieantiga-list/desenho-list.component';
import { SerieantigaFormComponent } from './serieantiga-form/desenho-form.component';
import { SerieantigaCrudComponent } from './serieaniga-crud/desenho-crud.component';

const DESENHOS_ROUTES: Routes = [
 { path: '', component: SerieantigaCrudComponent},
{ path: ':id',   component: SerieAntigaFormComponent }

];

export const  serieantigasRouting = RouterModule.forChild(SERIEANTIGAS_ROUTES);
