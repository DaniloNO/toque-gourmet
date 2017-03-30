import { LoginPage } from './../login/login';
import { Programacao } from './../programacao/programacao';
import { LoginProvider } from './../../providers/login-provider';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html'
})
export class LogoutPage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public navParams: NavParams, public alerCtrl: AlertController, public loginProvider: LoginProvider) {}

  ionViewDidLoad() {
    this.doConfirm();
  }

   doConfirm() {
    let confirm = this.alerCtrl.create({
      title: 'Deseja sair de sua conta ?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            this.menuCtrl.enable(true);
            this.menuCtrl.swipeEnable(true);
            this.navCtrl.setRoot(Programacao);
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.menuCtrl.enable(false);
            this.menuCtrl.swipeEnable(false);
            this.navCtrl.setRoot(LoginPage);
          }
        }
      ]
    });
    confirm.present()
  }

}
