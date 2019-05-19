import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Desenho } from './serieantiga';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { listenerCount } from 'cluster';

@Injectable()
export class SerieantigasService {

  private  url: string = 'http://localhost:8080/serieantigas';
  serieantigas
  serieantigasChanged = new  EventEmitter<Observable<Serieantiga[]>>();
 

  constructor (private http: Http)  { }

  getAll (): Observable<Serieantiga[]> {
    return this.http.get(this.url)
      .map(res => res.json())
      .catch(this.handleError);
    }
    private handleError(error: any ){
      let erro = error.message || 'Server error';
      console.error ('Ocorreu um erro', error );
      return Observable.throw(erro);
    }
    
  add(desenho: Serieantiga ){
    return this.http.post(this.url, JSON.stringify(serieantiga), 
    {headers: this.getHeaders()})
    .do(data => this.serieantigaChanged.emit(this.getAll()))
    .catch (this.handleError);
  }
 
   remove(id: number ){
      return this.http.delete(this.getUrl(id), { headers: this.getHeaders()})
      .map(res => res.json())
      .do(data => this.serieantigaChanged.emit(this.getAll()))
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
    update(serieantiga: Serieantiga ){
      return this.http.put(this.url, JSON.stringify(serieantiga), 
      {headers: this.getHeaders()})
      .do(data => this.serieantigaChanged.emit(this.getAll()))
      .catch(this.handleError);
    }
      get (id : number ){
      return this.getAll()
      .map(list: any) => list.find(serieantiga => serieantiga.codigo == id ))
      .catch(this.handleError);
    } 
  }

  