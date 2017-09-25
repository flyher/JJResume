import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppComponent } from './app/app.component';
import { HeaderComponent } from './header/header.component';
import { FriendLinkComponent } from './components/friend-link/friend-link.component';
import { bootstrap } from 'bootstrap';

@NgModule({
  declarations: [
    // AppComponent,
    HeaderComponent,
    FriendLinkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    // AppComponent,
    HeaderComponent,
    FriendLinkComponent
  ]
})
export class MainModule { }
