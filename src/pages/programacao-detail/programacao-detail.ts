import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ProgramacaoDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-programacao-detail',
  templateUrl: 'programacao-detail.html'
})
export class ProgramacaoDetailPage {
  private programacao: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.programacao = this.navParams.data.programacao;
    //console.log('ionViewDidLoad ProgramacaoDetailPage');
  }

}
