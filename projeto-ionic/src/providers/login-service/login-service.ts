import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';


import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

import { Utils } from '../../model/utils';
import { Usuario } from '../../model/usuario';

/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {

  private loginUrl: string;
  public handleError: any;

  constructor(public http: Http) {
    this.loginUrl = Utils.getUrlBackend() + "oauth/token?grant_type=password&username="
  }

  public login(usuario: Usuario): Observable<any>{
    this.loginUrl + usuario.email + "&password=" + encodeURIComponent(usuario.senha);
    let headers = new Headers({
      "Authorization": "Basic " + btoa("cliente"+ ':' + "123")
    });

    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.loginUrl + usuario.email + "&password=" +
    encodeURIComponent(usuario.senha), {}, options)
    .map(res => res.json());
  }

}
