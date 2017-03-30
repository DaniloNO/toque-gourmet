import { ProgramacaoProvider } from './../../providers/programacao-provider';
import { InscricaoPage } from './../inscricao/inscricao';
import { ProgramacaoDetailPage } from './../programacao-detail/programacao-detail';
import { ProgramacaoItens } from './../../model/programacaoItens';
import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-programacao',
  templateUrl: 'programacao.html'
})

export class Programacao  {
  programacao: Array<ProgramacaoItens>;

  constructor(public navCtrl: NavController, public programacaoProvider: ProgramacaoProvider, public ngZone: NgZone) {}

  ionViewDidLoad() {
    this.programacaoProvider.referenceProgramacao.on('value', (snapshot) =>{
      this.ngZone.run( () => {
        let innerArray = new Array();
        snapshot.forEach(elemento => {
          let el = elemento.val();
          innerArray.push(el);
        })
        this.programacao = innerArray;
      })
    })
  }

  goToProgramacaoDetail(programacao){
    this.navCtrl.push(ProgramacaoDetailPage, {
      programacao: programacao
    });
  }

  goToInscricao(programacao){
    this.navCtrl.push(InscricaoPage, {
      Programacao: programacao
    });
  }


}