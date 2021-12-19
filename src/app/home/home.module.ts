import { AuthService } from './../welcome/auth.service';
import { UserService } from './user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { MessageInputComponent } from './message-input/message-input.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../welcome/token-interceptor.service';
import { ModalComponent } from './modal/modal.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { NotificationListComponent } from './notification-list/notification-list.component';




@NgModule({
  declarations: [
    HomeComponent,
    UserPanelComponent,
    ChatWindowComponent,
    MessageInputComponent,
    ModalComponent,
    NotificationsComponent,
    ChatListComponent,
    NotificationListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  
})
export class HomeModule { }
