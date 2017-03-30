import { LogoutPage } from './../pages/logout/logout';
import { ContatosPage } from './../pages/contatos/contatos';
import { ServicosPage } from './../pages/servicos/servicos';
import { ForumPage } from './../pages/forum/forum';
import { MessagemPushPage } from './../pages/messagem-push/messagem-push';
import { LoginPage } from './../pages/login/login';
import { SobreNos } from './../pages/sobreNos/sobreNos';
import { Programacao } from './../pages/programacao/programacao';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Programação', component: Programacao },
      { title: 'Sobre Nós', component: SobreNos },
      { title: 'Mensagem Push', component: MessagemPushPage  },
      { title: 'Fórum', component: ForumPage },
      { title: 'Serviços', component: ServicosPage },
      {title: 'Contados', component: ContatosPage},
      {title: 'Logout', component: LogoutPage}
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
