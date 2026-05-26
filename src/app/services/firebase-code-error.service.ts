import { Injectable } from '@angular/core';
import { firebaseCodeErrorEnum } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }

  codeError(code: string) {
    switch(code) {
      case firebaseCodeErrorEnum.EmailAlreadyInUse:
        return 'El usuario ya existe';
      case firebaseCodeErrorEnum.WeakPassword:
        return 'La contraseña es muy debil';
      case firebaseCodeErrorEnum.InvalidEmail:
        return 'El correo es invalido';
      case firebaseCodeErrorEnum.WrongPassword:
        return 'La contraseña es incorrecta';
      case firebaseCodeErrorEnum.UserNotFound:
        return 'El usuario no existe';
      default:
        return 'Error desconocido'
    }
  }
}
