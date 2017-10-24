import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppComponent } from './app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { FriendLinkComponent } from './components/friend-link/friend-link.component';
import { FooterComponent } from './components/footer/footer.component';
import { TaskComponent } from './components/task/task.component';
import { bootstrap } from 'bootstrap';

@NgModule({
  declarations: [
    // AppComponent,
    HeaderComponent,
    FriendLinkComponent,
    FooterComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    // AppComponent,
    HeaderComponent,
    FriendLinkComponent,
    FooterComponent,
    TaskComponent
  ]
})
export class MainModule { }
