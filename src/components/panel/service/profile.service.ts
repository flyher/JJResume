import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TimeLineJSON } from '../../../mock/timeline';
import { HOST, URL_PROFILE } from '../../../global/config';

import 'rxjs/add/operator/toPromise';

import { Profile } from './../../../model/profile.model';
// import { Promise } from 'q';

// https://angular.cn/tutorial/toh-pt6
let timeLineJSON = new TimeLineJSON();
@Injectable()
export class ProfileService {
  constructor(private http: Http) {}
  getProfile(): Promise<Profile> {
    return this.http
      .get(URL_PROFILE)
      .toPromise()
      .then(response => response.json().data as Profile)
      .catch();

    // return timeLineJSON.getPersonInfo(true);
  }
}
