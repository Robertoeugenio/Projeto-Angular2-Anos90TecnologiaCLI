import { Routes, RouterModule } from '@angular/router';
import { VideoGameListComponent } from './videogame-list/videogame-list.component';
import { VideogameFormComponent } from './videogame-form/videogame-form.component';
import { VideogameCrudComponent } from './videogame-crud/videogame-crud.component';

const VIDEOGAMES_ROUTEVIDES: Routes = [
    {
        path: '',
        component: VideogameCrudComponent
    },
    {
        path: ':id',
        component: VideogameFormComponent
    }

];

export const videogamesRouting = RouterModule.forChild(VIDEOGAMES_ROUTES);
