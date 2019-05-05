import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesenhoListComponent } from './desenho-list/desenho-list.component';
import { desenhosRouting } from './desenhos.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, desenhosRouting, FormsModule
  ],
  declarations: [DesenhoListComponent]
})
export class DesenhosModule { }
