import { Injectable } from '@angular/core';

@Injectable()
export class TaskListService {
  showList(): void {
    console.log('show list');
  }
}