import { Task } from './task.model';
/**
 * project
 */
export class Project {
  id: number;
  year: number;
  status: boolean;
  tasks: Array<Task>;
}
