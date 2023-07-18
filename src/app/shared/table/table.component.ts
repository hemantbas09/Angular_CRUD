import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  existingProfileData!: any;
  constructor(private _userProfileService: UserProfileService) {}

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile() {
    this._userProfileService.getUserProfile().subscribe({
      next: (res) => {
        this.existingProfileData = res;
      },
      error: (err) => {
        console.log('This is Error:');
      },
    });
  }

  deleteData(id: number): void {
    this._userProfileService.deleteUserProfile(id).subscribe({
      next: (res) => {
        alert('Deleted Successfully');
        this.getUserProfile();
      },
      error: (err) => {
        console.log('Not Delete');
      },
    });
  }

  editProfile(userData: any) {
    const selectedUserData = userData;
    console.log('this is Selected Data', selectedUserData);
  }
}
