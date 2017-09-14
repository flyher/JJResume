import './keyword-list.component.scss';

import { Keyword } from '../../model/keyword.model';

declare let taskAlert: any;

class KeywordListComponentController implements ng.IComponentController {
  // ng1生命周期 https://segmentfault.com/a/1190000005868488
  static $inject: Array<string> = ['$scope'];
  public keywords: Array<Keyword> = [{
    'ID': 1,
    'Key': 'angular',
    'Value': 'Angular'
  }, {
    'ID': 2,
    'Key': 'typescript',
    'Value': 'Typescript'
  }];
  constructor(private $scope: any) {
    // 构造函数
  }

  // $onInit() { }

  // $postLin() { }

  // $onChanges() { }

  // $onDestory() { }
}

export const KeywordListComponent: ng.IComponentOptions = {
  bindings: {

  },
  templateUrl: './task.component.html',
  controller: KeywordListComponentController,
  controllerAs: 'keywordListCtrl'
};