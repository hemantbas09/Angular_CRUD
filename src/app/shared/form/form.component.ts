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
  imageURL: any = '../../assets/SidebarIcon/profile-picture.jpg';
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
    // Access the Selected Files:
    let selectedImage = event.target.files[0];

    // Create a instance of the FileReader:
    let reader = new FileReader();

    // Read the selected file as a data URL---> readAsDataURL represent the file data as base64 encoded string:
    reader.readAsDataURL(selectedImage);

    // create the reader callback function:
    reader.onload = () => {
      // Update the source of the image:
      this.imageURL = reader.result;

      this.form.patchValue({
        [controlName]: this.imageURL,
      });
    };
  }

  onSubmit() {
    console.log(this.form.value);
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
