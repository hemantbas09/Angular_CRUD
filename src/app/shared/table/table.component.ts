import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { SearchFilterService } from 'src/app/services/searchFilter/search-filter.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  catchError,
} from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  existingProfileData: any[] = [];
  searchForm: FormGroup;
  private searchTextChanged = new Subject<string>();

  constructor(
    private formBuilder: FormBuilder,
    private userProfileService: UserProfileService,
    private searchFilterService: SearchFilterService
  ) {
    this.searchForm = this.formBuilder.group({
      searchText: [''],
    });
  }

  ngOnInit(): void {
    this.getUserProfile();
    this.setupSearchObservable();
  }

  private getUserProfile() {
    this.userProfileService.getUserProfile().subscribe(
      (res) => {
        this.existingProfileData = res;
      },
      (err) => {
        console.error('Error fetching user profiles:', err);
      }
    );
  }

  deleteData(id: number): void {
    this.userProfileService.deleteUserProfile(id).subscribe(
      (res) => {
        alert('Deleted Successfully');
        this.getUserProfile();
      },
      (err) => {
        console.error('Failed to delete user profile:', err);
      }
    );
  }

  editProfile(userData: any) {
    console.log('Selected Data:', userData);
  }

  private setupSearchObservable() {
    this.searchForm
      .get('searchText')
      ?.valueChanges.pipe(
        debounceTime(300), // Add a debounce to prevent frequent API calls while typing
        distinctUntilChanged() // Only trigger search if the value has changed
      )
      .subscribe((searchText: string) => {
        this.searchTextChanged.next(searchText);
      });

    this.searchTextChanged
      .pipe(
        switchMap((searchText: string) => this.searchUser(searchText)),
        catchError((error) => {
          console.error('Error searching for user profiles:', error);
          return [];
        })
      )
      .subscribe((response) => {
        this.existingProfileData = response;
      });
  }

  // Change 'searchUser()' to public
  public searchUser(searchText: string): Observable<any[]> {
    if (!searchText || searchText.trim().length === 0) {
      return this.userProfileService.getUserProfile();
    } else {
      return this.searchFilterService.searchUser(searchText);
    }
  }
}
