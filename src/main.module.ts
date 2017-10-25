import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppComponent } from './app/app.component';
import { bootstrap } from 'bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FriendLinkComponent } from './components/friend-link/friend-link.component';
import { FooterComponent } from './components/footer/footer.component';

import { ProfileComponent } from './components/profile/profile.component';

import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
@NgModule({
  declarations: [
    // 引入所有定义的组件,ng2最新版本不允许在父component中使用directives来引入孩子组件(变化真快)
    // https://stackoverflow.com/questions/39410417/how-to-import-component-into-another-root-component-in-angular-2
    // AppComponent,
    HeaderComponent,
    FriendLinkComponent,
    FooterComponent,
    ProfileComponent,

    TaskComponent,
    TaskListComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    // // AppComponent,
    // 引入需要在index中显示的组件
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    TaskListComponent
  ]
})
export class MainModule { }
