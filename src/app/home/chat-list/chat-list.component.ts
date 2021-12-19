import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  @Output() pickedChat = new EventEmitter<boolean>();

  chats:any = [];
  constructor() { }

  ngOnInit(): void {
  }

  pick(index:number){
    this.pickedChat.emit(this.chats[index])
  }
}


