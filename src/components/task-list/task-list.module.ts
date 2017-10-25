import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, Input } from '@angular/core';

import { TaskComponent } from '../task/task.component';
// import { TaskListComponent } from './task-list.component';

@NgModule({
  declarations: [
    TaskComponent,
    // TaskListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    TaskComponent
    // TaskListComponent
  ]
})
export class TaskListModule { }
