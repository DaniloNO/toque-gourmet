import { InscricaoPage } from './../pages/inscricao/inscricao';
import { ProgramacaoDetailPage } from './../pages/programacao-detail/programacao-detail';
import { SobreNos } from './../pages/sobreNos/sobreNos';
import { Programacao } from './../pages/programacao/programacao';
import { Fire } from './../providers/fire';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

@NgModule({
  declarations: [
    MyApp,
    Programacao,
    SobreNos,
    ProgramacaoDetailPage,
    InscricaoPage
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
    InscricaoPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Fire]
})
export class AppModule {}
