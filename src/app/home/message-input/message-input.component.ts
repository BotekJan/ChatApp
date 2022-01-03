import { ChatService } from './../chat.service';
import { NgForm } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {
  @Input() chat:any;
  constructor(private chatService: ChatService, private router : Router) {
   }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.chatService.sendMessage(this.chat._id, form.controls.message.value).subscribe(res => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([this.router.url]
    )});
    form.reset()
  }
}
