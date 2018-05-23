import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from "ionic-angular";
import { AngularFireAuth } from "angularfire2/auth";
import { ToastController } from "ionic-angular";

import { Account } from "../../models/account/account.interface";
import { LoginResponse } from "../../models/login/login-response.interface";


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
  @Output() loginStatus: EventEmitter<LoginResponse>

  constructor(private toast: ToastController,
              private afAuth: AngularFireAuth,
              private navCtrl: NavController) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }




  async login() {
    try {
      const result: LoginResponse = {
        result: await this.afAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
      }
      this.loginStatus.emit(result);

      this.toast.create({
        message: 'Account Successfuly Created',
        duration: 3000
      }).present();
      console.log(result);
    }
    catch (e) {
      console.log(e);

      const error: LoginResponse = {
        error: e
      }

      this.loginStatus.emit(error);



      this.toast.create({
        message: e.message,
        duration: 3000
      }).present();
    }

  }

  navigateToRegisterPage() {
    this.navCtrl.push('RegisterPage')
  }




}
