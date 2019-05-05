import { Component, OnInit } from '@angular/core';
import { Desenho } from '../desenho';
import { DesenhosService } from '../desenhos.service';

@Component({
  selector: 'app-desenho-list',
  templateUrl: './desenho-list.component.html',
  styleUrls: ['./desenho-list.component.css']
})
export class DesenhoListComponent implements OnInit {
  desenho: Desenho[] = [];

  criterio = String;
  
  constructor( private desenhoService: DesenhosService) { }

  ngOnInit() {
      this.desenhoService.getAll()
         .subscribe(data => this.desenho  = data, err => {
           alert ('Aconteceu um erro ! ');
         });
        }
      
     /*   {'codigo': 1,
        'nomeDesenho':'Coelho Ricochete',
        'categoria':  'comédia',
        'exibicao':'1995',
        'notas':'10',
        'piorDesenho':'gato Felix'}, 
      {'codigo': 2,
       'nomeDesenho':'Papaléguas',
       'categoria':  'aventura',
       'exibicao':'1997',
       'notas':'8',
       'piorDesenho':'Manda Chuva'},
    ]
}
}*/

}