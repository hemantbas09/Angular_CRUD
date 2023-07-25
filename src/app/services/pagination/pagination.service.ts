import { Injectable } from '@angular/core';
import { SearchFilterService } from '../searchFilter/search-filter.service';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  private currentPage = 1;
  private itemsPerPage = 2;
  searchedItem: any;
  private searchSubscription!: Subscription;

  constructor(private searchFilterService: SearchFilterService) {}

  paginateItems(items: any[], page: number, searchTerm?: string): any[] {
    this.currentPage = page;

    if (!searchTerm) {
      return items.slice(
        (this.currentPage - 1) * this.itemsPerPage,
        this.currentPage * this.itemsPerPage
      );
    }

    this.searchSubscription = this.searchFilterService
      .searchUser(searchTerm)
      .subscribe(
        (res) => {
          this.unsubscribeSearch();
          this.searchedItem = res;
        },
        (err) => {
          console.error('Failed to delete user profile:', err);
        }
      );

    return this.searchedItem;
  }

  getCurrentPage(): number {
    return this.currentPage;
  }

  getTotalPages(items: any[]): number {
    return Math.ceil(items.length / this.itemsPerPage);
  }

  setCurrentPage(page: number): void {
    this.currentPage = page;
  }

  unsubscribeSearch(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
      this.searchedItem = null;
    }
  }
}
