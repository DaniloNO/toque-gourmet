import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-messagem-push',
  templateUrl: 'messagem-push.html'
})
export class MessagemPushPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagemPushPage');
  }

}
