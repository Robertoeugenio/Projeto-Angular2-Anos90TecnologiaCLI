import { Component, OnInit } from '@angular/core';
import { Subscription, Subscriber } from 'rxjs';
import { Serieantiga } from '../serieantigas';
import { SerieantigasService } from '../serieantigas';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-serieantiga-form',
  templateUrl: './serieantiga-form.component.html',
  styleUrls: ['./serieantiga-form.component.css']
})

export class SerieantigaFormComponent implements OnInit {

   private serieantigaIndex : number; 
   private isNew: boolean = true; 
   private serieantiga : Serieantiga ; 
   private  subscription: Subscription;

  constructor( private route : ActivatedRoute,
    private  router : Router, 
    private  serieantigaService: SerieantigasService) { }
     
  ngOnInit() {
    this.novo();
    this.subscription = this.route.params.subscribe(
      (params: any ) => {
        if (params.hasOwnProperty('id')){
          this.isNew = false ; 
          this.serieantigaIndex = params['id'];
          this.serieantigaService.get(this.serieantigaIndex)
          .subscribe(data =>  this.serieantiga = data );

        }else { 
          this.isNew = true;
        }
      }
    );

  }
   novo(){
     this.serieantiga = new  Serieantiga ();
   }
   salvar(){
     let result ; 
     if (this.isNew){
       result = this.serieantigaService.add(this.serieantiga);

     }else {
       result = this.serieantigaService.update(this.serieantiga);
     }
     this.novo();
     result.subscribe(data => alert('sucesso' + data ), 
     err => {
       alert("alert  error occurred" + err );
     });
   }
   excluir (){
     if (this.serieantiga.codigo == null ){
       alert("selecione alguma serie antiga ");
     }else {
       if (confirm("Voce quer excluir essa serie antiga ?" + this.serieantiga.serieantiga +  "?"),
       this.serieantigaService.remove(this.serieantiga.codigo)
       .subscribe(
         data =>  this.novo, 
         err => {
           alert("Serie antiga  não removido")
         });
        }
     }
     cancelar(){
       this.router.navigate(['/serieantigas']);
     }
   }


