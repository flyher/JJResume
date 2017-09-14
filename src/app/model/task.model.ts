import { Keyword } from './keyword.model';
export class Task {
  ID: number;
  Title: string;
  Describe: string;
  KeyWords: Array<Keyword>;
}