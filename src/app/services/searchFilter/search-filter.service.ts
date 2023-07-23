import { Injectable } from '@angular/core';
import { UserProfileService } from '../user-profile.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchFilterService {
  constructor(private userProfileService: UserProfileService) {}

  searchUser(searchQuery: string): Observable<any> {
    return this.userProfileService
      .getUserProfile()
      .pipe(
        map((userProfileData: any[]) =>
          userProfileData.filter((profile: any) =>
            this.profileIncludesLetter(profile, searchQuery)
          )
        )
      );
  }

  profileIncludesLetter(profile: any, searchQuery: string): boolean {
    const letterToSearch = searchQuery.toLowerCase();

    const lowercaseProfile =
      profile.firstName.toLowerCase() +
      profile.lastName.toLowerCase() +
      profile.email.toLowerCase() +
      profile.role.toLowerCase() +
      profile.country.toLowerCase() +
      profile.timeZone.toLowerCase();

    return lowercaseProfile.includes(letterToSearch);
  }
}
