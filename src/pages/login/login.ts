import { FacebookLogin } from './../../util/facebook-login';
import { Programacao } from './../programacao/programacao';
import { LoginProvider } from './../../providers/login-provider';
import { Credencial } from './../../model/credencial';
import { RegistrarPage } from './../registrar/registrar';
import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  credencial:Credencial;

  constructor(public navCtrl: NavController, 
              public loginProvider: LoginProvider, 
              public menuCtrl: MenuController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController) {
          this.initialize();   
  }

  private initialize(){
    this.credencial = new Credencial();
  }

  ionViewDidEnter(){
    this.menuCtrl.enable(false);
    this.menuCtrl.swipeEnable(false);
  }

  ionViewDidLoad() {
    this.presentLoading();
    this.loginProvider.loginSucessoEventEmitter.subscribe(
      user =>  {
        this.menuCtrl.enable(true);
        this.menuCtrl.swipeEnable(true);
        this.navCtrl.setRoot(Programacao); 
      }
    );
    this.loginProvider.loginFalhaEventEmitter.subscribe(
      error => console.log(error)
    )
  }

  loginComFacebook(){
    FacebookLogin.login(response => {
      this.loginProvider.loginComFacebook(response.accessToken, () => {
        this.menuCtrl.enable(true);
        this.menuCtrl.swipeEnable(true);
        this.navCtrl.setRoot(Programacao);
      }, error => {
        alert('error');
      })
    }, error =>{
      alert(error);
    });
  }

  loginComCredencial(){
    this.loginProvider.loginComCredencial(this.credencial);
  }

  loginComGoogle(){
    this.loginProvider.loginComGoogle();
  }

  sair(){
    this.loginProvider.sair();
  }

  doRegister(){
    this.navCtrl.push(RegistrarPage);
  }

   presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Carregando...",
      duration: 3000
    });
    loader.present();
  }

}

