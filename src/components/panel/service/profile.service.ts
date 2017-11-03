import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TimeLineJSON } from '../../../mock/timeline';
// https://angular.cn/tutorial/toh-pt6
let timeLineJSON = new TimeLineJSON();
@Injectable()
export class ProfileService {
  constructor(private http: Http){};
  getProfile(): string {
    return timeLineJSON.getPersonInfo(true);
  };
}