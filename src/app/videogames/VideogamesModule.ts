import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideogameListComponent } from './videogame-list/videogame-list.component';
import { FormsModule } from '@angular/forms';
import { VideogamesService } from './videogames.service';
import { VideogameFormComponent } from './videogame-form/videogame-form.component';
import { VideogameCrudComponent } from './videogame-crud/videogame-crud.component';
import { videogamesRouting } from './videogames.routing';
@NgModule({
  imports: [
    CommonModule, videogamesRouting, FormsModule
  ],
  declarations: [VideogameListComponent, VideogameFormComponent, VideogameCrudComponent],
  providers: [VideogamesService]
})
export class VideogamesModule {
}
