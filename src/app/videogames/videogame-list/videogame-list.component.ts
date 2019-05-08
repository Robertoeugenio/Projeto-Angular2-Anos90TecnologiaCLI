import { Component, OnInit } from '@angular/core';
import { videogame } from '../videogame';
import { VideogamesService } from '../videogames.service';

@Component({
  selector: 'app-videogame-list',
  templateUrl: './videogame-list.component.html',
  styleUrls: ['./videogame-list.component.css']
})
export class VideoGameListComponent implements OnInit {
  [x: string]: any;
  videogame: Videogame[] = [];

  criterio = String;
  VideogamesService: any;
   constructor( private videogameService: VideogamesService) { }
 

  ngOnInit() {
      this.VideogamesService.getAll()
         .subscribe(data => this.videogame  = data, err => {
           alert ('Aconteceu um erro ! ');
         });
        }
      
     /*   {'codigo': 1,
        'nomeVideogame':'Atari',
        'nomeJogo':'Pac Man',
        'categoria':  'estrategia',
        'anoLancamento':'1988',
        'jogabilidade': 'muito bom', 
        'notas':'10',
        'piorJogo':'pitfall'}, 
      {'codigo': 2,
        'nomeVideogame':'Nintendo',
        'nomeJogo':'Super Soccer ',
        'categoria':  'esporte',
        'anoLancamento':'1994',
        'jogabilidade': ' bom', 
        'notas':'10',
         'piorJogo':' Futebol Americano'}, 
    ]
}
}*/

}