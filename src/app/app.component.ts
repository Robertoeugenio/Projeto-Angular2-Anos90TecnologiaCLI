import { Component } from '@angular/core';

@Component({
  selector: 'app-root', 
   templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trabalho realizado com Sucesso!';
  variavelnova = 'Fazendo teste com Estilização';
  pessoas: string [] =['JOÃO', 'MARIA', 'ANGULAR 2'];
}
