import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { SearchFilterService } from 'src/app/services/searchFilter/search-filter.service';
import { PaginationService } from 'src/app/services/pagination/pagination.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  totalUser!: number;
  existingProfileData: any[] = [];
  searchTerm: string = '';

  constructor(
    private userProfileService: UserProfileService,
    private searchFilterService: SearchFilterService,
    private paginationService: PaginationService
  ) {}

  ngOnInit(): void {
    this.getUserProfile();
  }

  private getUserProfile() {
    this.userProfileService.getUserProfile().subscribe(
      (res) => {
        this.existingProfileData = res;
        this.totalUser = this.existingProfileData.length;
        this.userProfileService.setTotalUser(this.totalUser);
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
    this.totalUser = this.existingProfileData.length;
  }

  editProfile(userData: any) {
    console.log('Selected Data:', userData);
  }

  get paginatedUsers(): any[] {
    return this.paginationService.paginateItems(
      this.existingProfileData,
      this.paginationService.getCurrentPage(),
      this.searchTerm
    );
  }

  getCurrentPage(): number {
    return this.paginationService.getCurrentPage();
  }

  getTotalPages(): number {
    return this.paginationService.getTotalPages(this.existingProfileData);
  }

  setPage(pageNumber: number) {
    this.paginationService.setCurrentPage(pageNumber);
  }

  onSearch() {
    this.setPage(1);
  }
}
