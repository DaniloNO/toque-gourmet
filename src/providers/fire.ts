import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
//import {ReplaySubject} from 'rxjs/ReplaySubject'


@Injectable()
export class Fire {
  referenceDataBase; //Variavel para guardar o caminho


  constructor() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyC7tbAnX1jE8aCNENoOIz-alBnMw3QDs2E",
      authDomain: "toque-gourmet.firebaseapp.com",
      databaseURL: "https://toque-gourmet.firebaseio.com",
      storageBucket: "toque-gourmet.appspot.com",
      messagingSenderId: "949319740496"
    };

    firebase.initializeApp(config);

    
    this.referenceDataBase = firebase.database().ref().child('programacao');
  }

  }
