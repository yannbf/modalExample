import { BasicModalPage } from '../pages/modal/basic-modal/basic-modal';
import { HintModalPage } from '../pages/modal/hint-modal/hint-modal';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HintModalPage,
    BasicModalPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HintModalPage,
    BasicModalPage,
  ],
  providers: []
})
export class AppModule { }
