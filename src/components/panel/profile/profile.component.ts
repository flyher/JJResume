import { Component, OnInit } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
// import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import 'rxjs/add/operator/switchMap';

import { ProfileService } from '../service/profile.service';
import { Profile } from '../../../model/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {
  profile: Profile;

  // Inject the ProfileService
  // https://angular.io/tutorial/toh-pt4
  // https://angular.cn/tutorial/toh-pt4
  constructor(private profileService: ProfileService, private http: Http) {}

  getProfile(): void {
    this.profileService.getProfile().then(profile => {
      this.profile = profile;
      console.log(profile);
    });
  }

  ngOnInit(): void {
    this.getProfile();
    // this.profileService.getProfile().then(profile => {
    //   // this.profile = profile;
    //   console.log(profile);
    // });
  }
}
