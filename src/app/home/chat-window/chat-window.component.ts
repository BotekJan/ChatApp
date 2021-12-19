import { ChatService } from './../chat.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
  @Input() chat:any;
  @Input() user:any;

  messages:any = []

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }

  loadMessages(){
    this.chatService.getMessages(this.chat);
  }

}
