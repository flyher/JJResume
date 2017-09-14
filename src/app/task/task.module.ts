import * as angular from 'angular';
import { TaskComponent } from './task.component';
import { KeywordListComponent } from './keyword-list/keyword-list.component';

export const TaskModule: ng.IModule = angular.module('TaskModule', [
  
])
  .component('task', TaskComponent)
  .component('keywordListComponent', KeywordListComponent);
