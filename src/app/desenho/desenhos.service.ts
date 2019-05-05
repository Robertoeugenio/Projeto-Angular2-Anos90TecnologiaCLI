import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Desenho } from './desenho';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from  'rxjs/Observable';

@Injectable()
export class DesenhosService {

  private  url: string = 'http://localhost:8080/desenhos';

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
  }

