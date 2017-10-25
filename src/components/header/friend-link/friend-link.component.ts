import { Component } from '@angular/core';
import { Links, Header } from '../../../model/header.model';
import './friend-link.component.less';

const HEADER: Header = {
  id: 1,
  title: 'Test Page',
  logo: './',
  friendLinks: [
    {
      id: 1,
      key: 'home',
      value: 'Home',
      url: '/home',
      selected: true
    }, {
      id: 2,
      key: 'newfeatures',
      value: 'New features',
      url: '/newfeatures',
      selected: false
    }, {
      id: 3,
      key: 'press',
      value: 'Press',
      url: '/press',
      selected: false
    }, {
      id: 4,
      key: 'newhires',
      value: 'New hires',
      url: '/newhires',
      selected: false
    }, {
      id: 5,
      key: 'about',
      value: 'About',
      url: '/about',
      selected: false
    }
  ]
}

@Component({
  selector: 'component-friend-link',
  templateUrl: './friend-link.component.html',
  // styleUrls: ['./friend-link.component.less'] //https://github.com/angular/angular-cli/issues/7245
  // styleUrls: ['./friend-link.component.css']
})
export class FriendLinkComponent {
  header = HEADER;
}