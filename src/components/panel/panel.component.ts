import { Component } from '@angular/core';
import { Panel } from '../../model/panel.model';
import { Theme } from '../../model/theme.model';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.less']
})
export class PanelComponent {
  panel: Panel = new Panel();

  constructor() {}

  ngOnInit(): void {}

  onChangeColor(item: Theme) {
    this.panel.theme = item;
  }
}
