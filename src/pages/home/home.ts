import { BasicModalPage } from '../modal/basic-modal/basic-modal';
import { HintModalPage } from '../modal/hint-modal/hint-modal';
import { Component } from '@angular/core';

import { ModalController, NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public modalCtrl: ModalController) { }

  openFullModal() {
    let myModal = this.modalCtrl.create(BasicModalPage);
    myModal.present();
  }
  openSmallModal() {
    let myModal = this.modalCtrl.create(HintModalPage);
    myModal.present();
  }
}
