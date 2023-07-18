import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../validators/password.validators';

interface UserInformation {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: string;
  selectedGender: string;
  selectedCity: string;
  description: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  form: FormGroup;
  userArray: UserInformation[] = [];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group(
      {
        fullName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern(/^[a-zA-Z\s]+$/),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
          ],
        ],
        confirmPassword: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/
            ),
          ],
        ],
        dateOfBirth: ['', [Validators.required]],
        selectedGender: ['', [Validators.required]],
        selectedCity: ['', [Validators.required]],
        description: [
          '',
          [
            Validators.required,
            Validators.minLength(20),
            Validators.maxLength(100),
          ],
        ],
      },
      { validator: PasswordValidator.passwordConfirmation }
    );
  }

  onSubmit() {
    if (this.form.invalid) {
      console.log('Invalid', this.form);
      return;
    }

    const email = this.form.get('email')?.value;
    if (this.isEmailExisting(email)) {
      return;
    }

    const password = this.form.get('password')?.value;
    const confirmPassword = this.form.get('confirmPassword')?.value;

    if (!this.isPasswordMatching(password, confirmPassword)) {
      return;
    }

    const isDataExisting: UserInformation[] = JSON.parse(
      localStorage.getItem('userInformation') || '[]'
    );
    const userInformation: UserInformation = this.form.value;
    this.userArray = isDataExisting;
    this.userArray.push(userInformation);
    localStorage.setItem('userInformation', JSON.stringify(this.userArray));
  }

  isEmailExisting(email: string): boolean {
    const isDataExisting: UserInformation[] = JSON.parse(
      localStorage.getItem('userInformation') || '[]'
    );
    const isExisting = isDataExisting.some((user) => user.email === email);
    if (isExisting) {
      alert('Email already exists.');
    }
    return isExisting;
  }

  isPasswordMatching(password: string, confirmPassword: string): boolean {
    const isMatching = password === confirmPassword;
    if (!isMatching) {
      alert('Password and Confirm Password did not match.');
    }
    return isMatching;
  }
}
