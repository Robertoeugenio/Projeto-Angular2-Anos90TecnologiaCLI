import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesenhoListComponent } from './desenho-list/desenho-list.component';
import { desenhosRouting } from './desenhos.routing';
import { FormsModule } from '@angular/forms';
import { DesenhosService } from './desenhos.service';
import { DesenhoFormComponent } from './desenho-form/desenho-form.component';

@NgModule({
  imports: [
    CommonModule, desenhosRouting, FormsModule
  ],
  declarations: [DesenhoListComponent, DesenhoFormComponent],
  providers: [DesenhosService]
})
export class DesenhosModule { }
