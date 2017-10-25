// core
import { Component } from '@angular/core';
// model
import { Task } from '../../model/task.model';
import { Language } from '../../model/enum.model';



const TASK: Task = {
  id: 1,
  date: '05-10',
  project: {
    name: '项目名称',
    urls: [
      {
        id: 1,
        key: 'm1',
        value: 'https://www.baidu.com'
      }
    ],
    describe: '项目描述项目描述项目描述项目描述项目描述',
    tags: [
      {
        id: 1,
        key: Language.Vue,
        value: Language.Vue
      },
      {
        id: 2,
        key: Language.Angular,
        value: Language.Angular
      }
    ]
  }
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.less']
})
export class TaskComponent {
  task = TASK;
}