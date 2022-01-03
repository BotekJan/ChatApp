import { UserService } from './../user.service';
import { ChatService } from './../chat.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
  @Input() chat:any;


  messages:any = []
  user:any

  constructor(private chatService: ChatService,private userService: UserService) {
   
   }

  ngOnInit(): void {
    this.loadMessages()
    this.loadUser()
  }

  loadMessages(){
    this.chatService.getMessages(this.chat).subscribe(res => {this.messages = res});
  }

  loadUser(){
    this.userService.getUser().subscribe(res => {this.user = res})
  }

}
