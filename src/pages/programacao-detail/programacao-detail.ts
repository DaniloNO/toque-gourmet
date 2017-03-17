import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-programacao-detail',
  templateUrl: 'programacao-detail.html'
})
export class ProgramacaoDetailPage {
  private programacao: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.programacao = this.navParams.data.programacao;
  }

}
