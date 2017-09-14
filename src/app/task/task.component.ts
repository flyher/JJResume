import './task.component.scss';

// import { Task } from '../model/task.model';
// import { Keyword } from '../model/keyword.model';

// declare let taskAlert: any;

class TaskComponentController implements ng.IComponentController {
  // ng1生命周期 https://segmentfault.com/a/1190000005868488
  static $inject: Array<string> = ['$scope'];

  // constructor(private $scope: any) {
  //   // 构造函数
  //   // this.keyword = 
  // }

  // $onInit() { }

  // $postLin() { }

  // $onChanges() { }

  // $onDestory() { }
}

export const TaskComponent: ng.IComponentOptions = {
  bindings: {
    task: '='
  },
  templateUrl: './task.component.html',
  controller: TaskComponentController,
  controllerAs: 'taskCtrl'
};
