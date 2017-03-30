import { Credencial } from './../model/credencial';
import { Injectable, EventEmitter, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

@Injectable()
export class LoginProvider {

  user: any = {} ;
  currentUser:any;
  autenticado:boolean;
  loginSucessoEventEmitter:EventEmitter<any>;
  loginFalhaEventEmitter:EventEmitter<any>;
  logoutEventEmitter:EventEmitter<any>;

  constructor(public http: Http, public ngZone: NgZone) {
    this.loginSucessoEventEmitter = new EventEmitter();
    this.loginFalhaEventEmitter = new EventEmitter();
    this.logoutEventEmitter = new EventEmitter();
    firebase.auth().onAuthStateChanged(usuario => {
      this.callbackStateChange(usuario);
    })
  }

  private callbackStateChange(usuario){
    this.ngZone.run( () => {
      if(usuario == null){
        this.currentUser = null;
        this.autenticado = false;
        this.callbackFalhaLogin(usuario);
      } else {
        this.currentUser = usuario;
        this.autenticado = true;
        this.callbackSucessoLogin(usuario);
     }
    })
  }

  loginComFacebook(accessToken:string, successCallBack, errorCallBack){
    let credential = firebase.auth.FacebookAuthProvider.credential(accessToken);

    firebase.auth().signInWithCredential(credential).then(response =>{
      this.setUser(accessToken, response.providerData[0]);
      successCallBack();
    }, error => {
      errorCallBack(error);
    })
  }

  loginComCredencial(credencial:Credencial){
    firebase.auth().signInWithEmailAndPassword(credencial.email,credencial.senha)
      .then(resultado => this.callbackSucessoLogin(resultado))
      .catch(error => this.callbackFalhaLogin(error))
  }

  loginComGoogle(){
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(resultado => this.callbackSucessoLogin(resultado))
      .catch(error => this.callbackFalhaLogin(error))
  }

  registrarUsuario(credencial:Credencial){
    firebase.auth().createUserWithEmailAndPassword(credencial.email,credencial.senha)
      .then(result => {
        console.log(result);
        firebase.database().ref('users/').child(result.uid).set(result.email)
      })
      .catch(error => console.log(error));
  }

  sair(){
    firebase.auth().signOut()
      .then(() => this.logoutEventEmitter.emit(true))
      .catch(error => this.callbackFalhaLogin(error))
  }


  private callbackSucessoLogin(response){
    this.loginSucessoEventEmitter.emit(response.user);
  }

  private callbackFalhaLogin(error){
    this.loginFalhaEventEmitter.emit({code : error.code, message : error.message, email: error.email, credencial: error.credencial});
  }

  private setUser(accessToken: string, authData: any ){
    this.user.name = authData.displayName;
    this.user.photo = authData.photoURL;
    this.user.id = authData.uid;
    this.user.token = accessToken;

    this.saveUser();
  }

  private saveUser(){
    firebase.database().ref('users').child(this.user.id).set({
      name: this.user.name,
      photo: this.user.photo
    });
  }

}

