import { LoginProvider } from './login-provider';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

@Injectable()
export class ProgramacaoProvider {
  referenceProgramacao;
  dataAtual: string;

  constructor(public http: Http, public loginProvider: LoginProvider) {
    this.initialize();
  }

  private initialize(){
    this.referenceProgramacao = firebase.database().ref().child('programacao').orderByChild('dataInicial');
  }
}
