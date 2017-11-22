import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { URL_THEME } from '../../../global/config';

import 'rxjs/add/operator/toPromise';

import { Theme } from './../../../model/theme.model';

@Injectable()
export class ThemeService {
  constructor(private http: Http) {}
  getTheme(): Promise<Array<Theme>> {
    return this.http
      .get(URL_THEME)
      .toPromise()
      .then(response => response.json().data.colors as Array<Theme>)
      .catch();
  }
}
