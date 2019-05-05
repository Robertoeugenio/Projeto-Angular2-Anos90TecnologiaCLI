import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Desenho } from './desenho';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { listenerCount } from 'cluster';

@Injectable()
export class DesenhosService {

  private  url: string = 'http://localhost:8080/desenhos';

 desenhosChanged = new  EventEmitter<Observable<Desenho[]>>();
 

  constructor (private http: Http)  { }

  getAll (): Observable<Desenho[]> {
    return this.http.get(this.url)
      .map(res => res.json())
      .catch(this.handleError);
    }
    private handleError(error: any ){
      let erro = error.message || 'Server error';
      console.error ('Ocorreu um erro', error );
      return Observable.throw(erro);
    }
    
  add(desenho: Desenho ){
    return this.http.post(this.url, JSON.stringify(desenho), 
    {headers: this.getHeaders()})
    .do(data => this.desenhosChanged.emit(this.getAll()))
    .catch (this.handleError);
  }
 
   remove(id: number ){
      return this.http.delete(this.getUrl(id), { headers: this.getHeaders()})
      .map(res => res.json())
      .do(data => this.desenhosChanged.emit(this.getAll()))
      .catch (this.handleError);
    }
    private getHeaders(){
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return headers;
    }
    private getUrl(id: number){
      return `${this.url}/${id}`;
    }
    update(desenho: Desenho ){
      return this.http.put(this.url, JSON.stringify(desenho), 
      {headers: this.getHeaders()})
      .do(data => this.desenhosChanged.emit(this.getAll()))
      .catch(this.handleError);
    }
     /*get (id : number ){
      return this.getAll()
      .map(list: any) => list.find(desenho => desenho.codigo == id ))
      .catch(this.handleError);
    } */
  }

  }
