import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css'],
})
export class ValidationComponent implements OnInit {
  @Input() formValidation!: any;
  @Input() validationMessage!: string;

  constructor() {
    // console.log('This is contolr', this.formValidation);
  }
  ngOnInit(): void {
    console.log('This is contolr',this.formValidation );
  }

  isInvalid() {
    return (
      this.formValidation &&
      this.formValidation.invalid &&
      this.formValidation.touched
    );
  }

  check: any = '';
  errorMessage() {
    this.check = '';
    if (this.formValidation.errors?.passwordMatch) {
      this.check += `${this.validationMessage} should Match With the Password\n`;
    }
    if (this.formValidation.errors?.required) {
      this.check += `${this.validationMessage} is required.\n`;
    }
    if (this.formValidation.errors?.minlength) {
      this.check += `${this.validationMessage} should be at least ${this.formValidation.errors.minlength.requiredLength} character.\n`;
    }
    if (this.formValidation.errors?.pattern) {
      if (this.validationMessage == 'Full Name') {
        this.check += ` ${this.validationMessage} should contain only alphabetic characters.\n`;
      } else if (this.validationMessage == 'Email') {
        this.check += ` Please Fill ${this.validationMessage} with the Correct Formate`;
      }
    }

    return this.check;
  }

  success() {
    // console.log(this.formValidation.fullName.errors?.required);
  }
}
