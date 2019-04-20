import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';


@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  constructor() { }

  clientes: Cliente[] = [];

  ngOnInit() {
    this.clientes = [{
      'codigo': 1,
      'nome': 'Roberto Eugenio ',
      'cargo': 'Desenvolvedor Web ',
      'endereco': 'Rua da China, 67, Centro',
      'cidade': 'Uberlandia',
      'cep': '38400-000',
      'pais': 'Brasil',
      'telefone': '3432323232',
      'fax': '3432322323'
    },
    {
      'codigo': 2,
      'nome': 'Sara Raquel ',
      'cargo': 'Servidora Pública',
      'endereco': 'Rua do Japão,  57, centro',
      'cidade': 'Okushima',
      'cep': '3528752',
      'pais': 'Japan',
      'telefone': '3525254852',
      'fax': '3548975545'

    }]
  }

}