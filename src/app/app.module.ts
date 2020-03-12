import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './components/message/message.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { NgChatModule } from 'ng-chat';
import { ChatBoxComponent } from './components/chat/chat-box/chat-box.component';
import { ChatHisComponent } from './components/chat/chat-his/chat-his.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ContactListComponent,
    ChatBoxComponent,
    ChatHisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
