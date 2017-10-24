export class Links {
  id: number;
  key: string;
  value: string;
  url: string;
  selected: boolean;
}
export class Header {
  id: number;
  title: string;
  logo: string;
  friendLinks: Array<Links>;
}