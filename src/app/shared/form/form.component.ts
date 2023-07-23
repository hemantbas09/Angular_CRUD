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

  constructor(
    private fb: FormBuilder,
    private userProfileService: UserProfileService,

    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', Validators.required],
      profilePicture: ['', Validators.required],
      role: ['', Validators.required],
      country: ['', Validators.required],
      timeZone: ['', Validators.required],
      bio: ['', Validators.required],
      project: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    if (!this.isAddMode) {
      this.userProfileService
        .getUserProfileById(this.id)
        .subscribe((userProfile) => {
          this.form.patchValue(userProfile);
        });
    }
  }

  onFileInput(event: any, controlName: string) {
    const file = event.target.files[0];
    this.form.patchValue({
      [controlName]: file,
    });
  }

  onSubmit() {
    if (!this.isAddMode) {
      this.userProfileService
        .updateUserProfile(this.id, this.form.value)
        .subscribe({
          next: () => {
            alert('User Edit Profile Successfully');
          },
          error: (error) => {
            console.error('Error updating user profile:', error);
          },
        });
    } else {
      this.userProfileService.addUserProfile(this.form.value).subscribe({
        next: () => {
          alert('User Add Profile Successfully');
        },
        error: (error) => {
          console.error('Error adding user profile:', error);
        },
      });
    }
  }

 
  
}
