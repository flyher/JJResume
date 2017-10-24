import { Language } from './enum.model';
/**
 * tag
 */
export class Tag {
  id: number;
  key: Language;
  value: Language;
}
/**
 * url
 */
export class Url {
  id: number;
  key: string;
  value: string;
}
/**
 * project
 */
export class Project {
  name: string;
  urls: Array<Url>;
  describe: string;
  tags: Array<Tag>;
}
/**
 * task
 */
export class Task {
  id: number;
  date: string;
  project: Project;
}

