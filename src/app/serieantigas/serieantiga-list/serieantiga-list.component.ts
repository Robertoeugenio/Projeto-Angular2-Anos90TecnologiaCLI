import { Component, OnInit } from '@angular/core';
import { SerieAntiga } from '../serie-antiga';
import { SerieantigasService } from '../serieantigas.service';

@Component({
  selector: 'app-serieantiga-list',
  templateUrl: './serieantiga-list.component.html',
  styleUrls: ['./serieantiga-list.component.css']
})
export class SerieantigaListComponent implements OnInit {
  serieantigas : SerieAntiga[] = [];

  criterio = String;
  serieantiga: any[];
  
  constructor( private serieantigaService: SerieantigasService) { }

  ngOnInit() {
      this.serieantigaService.getAll()
         .subscribe(data => this.serieantiga  = data, err => {
           alert ('Aconteceu um erro ! ');
         });
        }
      
       {'codigo': 1,
        'nomeSerie':'Jaspion',
        'categoria':  'aventura',
        'exibido':'1995',
        'preferido': 'Jaspion versus Santagoss',
        'notas':'10',
        'piorSerie':'Lyon Man'}, 
      {'codigo': 2,
       'nomeSerie':'Changeman',
       'categoria':  'aventura',
       'exibido':'1997',
       'preferido': 'criação do changeman',
       'notas':'9',
       'piorSerie':'Shazan'
      },
    ]
}
}

}