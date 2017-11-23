import { Component } from '@angular/core';
import { Footer } from '../../model/footer.model';

const FOOTER: Footer = {
  id: 1,
  describe: 'totoro built by Bootstrap',
  author: 'flyher'
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})

export class FooterComponent {
  footer = FOOTER;
}