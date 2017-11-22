import { Language } from './enum.model';
import { Stack } from './stack.model';
import { Url } from './url.model';
/**
 * task  history=>task
 */
// export class Task {
//   id: number;
//   date: string;
//   project: Project;
// }
export class Task {
  date: string;
  title: string;
  envir: string;
  stacks: Array<Stack>;
  module: string;
  describe: string;
  urls: Array<Url>;
  version: number;
  logo: string;
  enable: boolean;
}
