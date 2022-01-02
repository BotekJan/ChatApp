import { ChatService } from './../chat.service';
import { NgForm } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {
  @Input() chat:any;
  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.chatService.sendMessage(this.chat, form.controls.message.value).subscribe(res => console.log(res));
    form.reset()
  }
}
