import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { MessageInputComponent } from './message-input/message-input.component';



@NgModule({
  declarations: [
    HomeComponent,
    UserPanelComponent,
    ChatWindowComponent,
    MessageInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    
  ]
})
export class HomeModule { }
