import { SobreNos } from './../pages/sobreNos/sobreNos';
import { Programacao } from './../pages/programacao/programacao';
import { Fire } from './../providers/fire';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Programacao;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, fire:Fire) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Programação', component: Programacao },
      { title: 'Sobre Nós', component: SobreNos }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
