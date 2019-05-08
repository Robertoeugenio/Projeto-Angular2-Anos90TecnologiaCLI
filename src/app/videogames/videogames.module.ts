import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideogameListComponent } from './videogame-list/videogame-list.component';
import { VideogamesRouting } from './videogames.routing';
import { FormsModule } from '@angular/forms';
import { VideogamesService } from './videogames.service';
import { VideogameFormComponent } from './videogame-form/videogame-form.component';
import { VideogameCrudComponent } from './videogame-crud/videogame-crud.component';

@NgModule({
  imports: [
    CommonModule, videogamesRouting, FormsModule
  ],
  declarations: [VideogameListComponent, VideogameFormComponent, VideogameCrudComponent],
  providers: [VideogamesService]
})
export class VideogamesModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideogameListComponent } from './videogame-list/videogame-list.component';
import { videogamesRouting } from './videogames.routing';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VideogameListComponent]
})
export class VideogamesModule { }
