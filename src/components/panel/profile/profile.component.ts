import { Component } from '@angular/core';
import { ProfileService } from '../service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})

export class ProfileComponent {
  // Inject the ProfileService
  // https://angular.io/tutorial/toh-pt4
  // https://angular.cn/tutorial/toh-pt4
  constructor(private profileService: ProfileService, private http: Http) {
  }
}