import { Color } from './color.model';

/**
 * panel for page
 */
export class Panel {
  color: Color;

  setDefaultColor(
    color = {
      id: 0,
      key: 'silver',
      value: 'silver'
    }
  ) {
    this.color = color;
  }
}
