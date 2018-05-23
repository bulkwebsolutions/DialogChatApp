import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
import { AngularFireAuth } from "angularfire2/auth";
import { Account } from "../../models/account/account.interface";
import { ToastController } from "ionic-angular";

/**
 * Generated class for the LoginFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: 'login-form.component.html'
})
export class LoginFormComponent {

  account = {} as Account;

  constructor(private toast: ToastController,
              private afAuth: AngularFireAuth,
              private navCtrl: NavController) {}

  navigateToPage(pageName: string) {

    // Shorter style
    // if this equals true pageName === 'TabsPage'
    // execute this.navCtrl.setRoot(pageName)
    pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);

    // if (pageName === 'InboxPage') {
    //   this.navCtrl.setRoot(pageName);
    // } else {
    //   this.navCtrl.push(pageName);
    // }


  }


  async login() {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
      this.toast.create({
        message: 'Account Successfuly Created',
        duration: 3000
      }).present();
      console.log(result);
    }
    catch (e) {
      console.log(e);
      this.toast.create({
        message: e.message,
        duration: 3000
      }).present();
    }

  }



}
