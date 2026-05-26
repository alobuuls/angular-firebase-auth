import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-password-recover',
  templateUrl: './password-recover.component.html'
})
export class PasswordRecoverComponent {

  recoveryUser: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService
  ) {
    this.recoveryUser = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  recovery() {
    const email = this.recoveryUser.value.email;
    this.loading = true;

    this.afAuth.sendPasswordResetEmail(email)
    .then(() => {
      this.toastr.info('Hemos enviado un correo para restablecer su contraseña', 'Recuperar Contraseña')
      this.router.navigate(['/login']);
    })
    .catch((error) => {
      this.loading = false;
      this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
    });
  }
}
