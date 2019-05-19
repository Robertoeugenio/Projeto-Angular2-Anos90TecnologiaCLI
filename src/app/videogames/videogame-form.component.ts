import { Component, OnInit } from '@angular/core';
import { Subscription, Subscriber } from 'rxjs';
import { VideoGame } from '../videogames';
import { VideogamesService } from '../videogames.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-videogames-form',
  templateUrl: './videogame-form.component.html',
  styleUrls: ['./videogame-form.component.css']
})

export class VideogameFormComponent implements OnInit {

   private videogameIndex : number; 
   private isNew: boolean = true; 
   private videogame : Videogame ; 
   private  subscription: Subscription;

  constructor( private route : ActivatedRoute,
    private  router : Router, 
    private  videogameService: VideogamesService) { }
     
  ngOnInit() {
    this.novo();
    this.subscription = this.route.params.subscribe(
      (params: any ) => {
        if (params.hasOwnProperty('id')){
          this.isNew = false ; 
          this.videogameIndex = params['id'];
          this.videogameService.get(this.videogameIndex)
          .subscribe(data =>  this.videogame = data );

        }else { 
          this.isNew = true;
        }
      }
    );

  }
   novo(){
     this.videogame = new VideoGame ();
   }
   salvar(){
     let result ; 
     if (this.isNew){
       result = this.videogameService.add(this.videogame);

     }else {
       result = this.videogameService.update(this.videogame);
     }
     this.novo();
     result.subscribe(data => alert('sucesso' + data ), 
     err => {
       alert("alert  error occurred" + err );
     });
   }
   excluir (){
     if (this.videogame.codigo == null ){
       alert("selecione algum videogame por favor ");
     }else {
       if (confirm("Voce quer excluir esse videogame ?" + this.videogame.videoGame +  "?"),
       this.videogameService.remove(this.videogame.codigo)
       .subscribe(
         data =>  this.novo, 
         err => {
           alert("Video game  não foi  removido")
         });
        }
     }
     cancelar(){
       this.router.navigate(['/videogames']);
     }
   }


