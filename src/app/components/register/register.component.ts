import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  registerUser: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private _firebaseError : FirebaseCodeErrorService
  ) {
      this.registerUser = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      })
  }

  register() {
    const email = this.registerUser.value.email;
    const password = this.registerUser.value.password;
    const confirmPassword = this.registerUser.value.confirmPassword;

    if (password !== confirmPassword) {
      this.toastr.error('Las constraseñas ingresadas no coinciden', 'Error')
      return
    }

    this.loading = true;

    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      this.verifyEmail()
    })
    .catch(err => {
      this.loading = false;
      this.toastr.error(this._firebaseError.codeError(err.code), 'Error')
    })
  }

  verifyEmail() {
    this.afAuth.currentUser.then((user) => user?.sendEmailVerification())
    .then(() =>{
      this.toastr.info('Le hemos enviado un correo para su verificacion', 'Verificar Correo')
      this.router.navigate(['/login'])
    })
  }

}
