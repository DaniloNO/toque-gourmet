import { LocalizacaoPage } from './../pages/localizacao/localizacao';
import { ReservaPage } from './../pages/reserva/reserva';
import { LogoutPage } from './../pages/logout/logout';
import { ServicosPage } from './../pages/servicos/servicos';
import { MessagemPushPage } from './../pages/messagem-push/messagem-push';
import { ForumPage } from './../pages/forum/forum';
import { LoginProvider } from './../providers/login-provider';
import { ProgramacaoProvider } from './../providers/programacao-provider';
import { RegistrarPage } from './../pages/registrar/registrar';
import { LoginPage } from './../pages/login/login';
import { ProgramacaoDetailPage } from './../pages/programacao-detail/programacao-detail';
import { SobreNos } from './../pages/sobreNos/sobreNos';
import { Programacao } from './../pages/programacao/programacao';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import * as firebase from 'firebase';

@NgModule({
  declarations: [
    MyApp,
    Programacao,
    SobreNos,
    ProgramacaoDetailPage,
    ReservaPage,
    LoginPage,
    RegistrarPage,
    LocalizacaoPage,
    ForumPage,
    MessagemPushPage,
    ServicosPage,
    LogoutPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Programacao,
    SobreNos,
    ProgramacaoDetailPage,
    ReservaPage,
    LoginPage,
    RegistrarPage,
    LocalizacaoPage,
    ForumPage,
    MessagemPushPage,
    ServicosPage,
    LogoutPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ProgramacaoProvider, LoginProvider]
})
export class AppModule {
    constructor(){
      //noinspection TypeScriptUnresolvedFunction
      firebase.initializeApp(firebaseConfig);
    }
}
const firebaseConfig = {
      apiKey: "AIzaSyC7tbAnX1jE8aCNENoOIz-alBnMw3QDs2E",
      authDomain: "toque-gourmet.firebaseapp.com",
      databaseURL: "https://toque-gourmet.firebaseio.com",
      storageBucket: "toque-gourmet.appspot.com",
      messagingSenderId: "949319740496"
};
