import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { clientesRouting } from 'app/clientes.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, clientesRouting, FormsModule
  ],
  declarations: [ClienteListComponent]
})
export class ClientesModule { }
