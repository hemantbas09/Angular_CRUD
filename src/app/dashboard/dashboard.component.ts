import { Component, OnDestroy } from '@angular/core';
import { UserProfileService } from '../services/user-profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnDestroy {
  totalUsers!: any;
  private totalUserSubscription: Subscription;

  constructor(private userProfileService: UserProfileService) {
    this.totalUserSubscription = this.userProfileService
      .getTotalUserObservable()
      .subscribe((count) => {
        this.totalUsers = count;
      });
  }

  ngOnDestroy() {
    this.totalUserSubscription.unsubscribe();
  }
}
