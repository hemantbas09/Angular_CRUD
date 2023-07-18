import { AbstractControl, ValidationErrors } from '@angular/forms';
export class PasswordValidator {
  static passwordConfirmation(
    control: AbstractControl
  ): ValidationErrors | null {
    const password = control.value.password;
    const confirmPassword = control.value.confirmPassword;
    if (password !== confirmPassword) {
      return { passwordMatch: false };
    }

    return null;
  }

}
