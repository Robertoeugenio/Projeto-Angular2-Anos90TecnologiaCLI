import { Component, OnInit } from '@angular/core';
import { Subscription, Subscriber } from 'rxjs';
import { Desenho } from '../desenho';
import { DesenhosService } from '../desenhos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-desenho-form',
  templateUrl: './desenho-form.component.html',
  styleUrls: ['./desenho-form.component.css']
})

export class DesenhoFormComponent implements OnInit {

   private desenhoIndex : number; 
   private isNew: boolean = true; 
   private desenho : Desenho ; 
   private  subscription: Subscription;

  constructor( private route : ActivatedRoute,
    private  router : Router, 
    private  desenhoService: DesenhosService) { }
     
  ngOnInit() {
    this.novo();
    this.subscription = this.route.params.subscribe(
      (params: any ) => {
        if (params.hasOwnProperty('id')){
          this.isNew = false ; 
          this.desenhoIndex = params['id'];
          this.desenhoService.get(this.desenhoIndex)
          .subscribe(data =>  this.desenho = data );

        }else { 
          this.isNew = true;
        }
      }
    );

  }
   novo(){
     this.desenho = new  Desenho ();
   }
   salvar(){
     let result ; 
     if (this.isNew){
       result = this.desenhoService.add(this.desenho);

     }else {
       result = this.desenhoService.update(this.desenho);
     }
     this.novo();
     result.subscribe(data => alert('sucesso' + data ), 
     err => {
       alert("alert  error occurred" + err );
     });
   }
   excluir (){
     if (this.desenho.codigo == null ){
       alert("selecione algum desenho ");
     }else {
       if (confirm("Voce quer excluir esse desenho ?" + this.desenho.nomeDesenho +  "?"),
       this.desenhoService.remove(this.desenho.codigo)
       .subscribe(
         data =>  this.novo, 
         err => {
           alert("Desenho não removido")
         });
        }
     }
     cancelar(){
       this.router.navigate(['/desenhos']);
     }
   }


