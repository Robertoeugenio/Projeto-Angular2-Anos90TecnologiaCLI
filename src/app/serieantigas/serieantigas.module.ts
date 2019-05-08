import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieantigaListComponent } from './serieantiga-list/serieantiga-list.component';
import { serieantigaRouting } from './serieantigas.routing';
import { FormsModule } from '@angular/forms';
import { SerieantigasService } from './serieantigas.service';
import { SerieantigaFormComponent } from './serieantiga-form/serieantiga-form.component';
import { SerieantigaCrudComponent } from './serieantiga-crud/serieantiga-crud.component';

@NgModule({
  imports: [
    CommonModule, serieantigasRouting, FormsModule
  ],
  declarations: [SerieantigaListComponent, SerieantigaFormComponent, SerieantigaCrudComponent],
  providers: [SerieantigasService]
})
export class SerieantigaModule { }
