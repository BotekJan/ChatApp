import { ChatService } from './../chat.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  @Output() pickedChat = new EventEmitter<boolean>();

  chats:any = [];
  picked:any;
  constructor(private chatService: ChatService) { 
    this.getChats()
  }

  ngOnInit(): void {
  }

  pick(index:number){
    this.pickedChat.emit(this.chats[index])
    this.picked = index;
  }

  getChats(){
    this.chatService.getChats().subscribe(res => {this.chats = res
    });
  }
}


