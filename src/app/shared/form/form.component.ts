import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserProfileService } from 'src/app/services/user-profile.service';
interface UserProfileInformation {
  lastName: string;
  firstName: string;
  email: string;
  profilePicture: string;
  role: string;
  country: string;
  timeZone: string;
  bio: string;
  project: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  id!: number;
  isAddMode!: boolean;
  form: FormGroup;
  profileDataArray: UserProfileInformation[] = [];
  @Inject('userData') private userData: any;
  constructor(
    private fb: FormBuilder,
    private _userProfileService: UserProfileService,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      lastName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      profilePicture: ['', [Validators.required]],
      role: ['', [Validators.required]],
      country: ['', [Validators.required]],
      timeZone: ['', [Validators.required]],
      bio: ['', [Validators.required]],
      project: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    if (!this.isAddMode) {
      this._userProfileService
        .getUserProfileById(this.id)
        .subscribe((x) => this.form.patchValue(x));
    }
  }
  onFileInput(event: any, controlName: string) {
    const file = event.target.files[0];
    this.form.patchValue({
      [controlName]: file,
    });
  }

  onSubmit() {
    this._userProfileService.addUserProfile(this.form.value).subscribe({
      next: (val: any) => {
        alert('User Add Profile Successfully');
      },
      error: (err: any) => {},
    });
  }
}
