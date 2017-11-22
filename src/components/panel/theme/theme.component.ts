import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
// import { Input } from '@angular/core/src/metadata/directives'; //https://github.com/angular/angular/issues/15679

import { ThemeService } from '../service/theme.service';
import { Theme } from '../../../model/theme.model';
import { Panel } from '../../../model/panel.model';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.less'],
  providers: [ThemeService]
})
export class ThemeComponent implements OnInit {
  @Input() panel: Panel;
  @Output() onChangeColor = new EventEmitter<Theme>();
  themes: Array<Theme>;

  constructor(private themeService: ThemeService, private http: Http) {}

  getTheme(): void {
    this.themeService.getTheme().then(theme => {
      this.themes = theme;
    });
  }

  ngOnInit(): void {
    this.getTheme();
  }

  changeColor(item: Theme) {
    this.onChangeColor.emit(item);
    // this.panel.theme = item;
    // console.log(item);
    console.log(this.panel);
  }
}
