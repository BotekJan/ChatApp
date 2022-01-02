import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  
  private _url = 'https://abcabcchatapp.herokuapp.com/chat';

  constructor(private http: HttpClient) {}

  getChats() {
    return this.http.get(this._url).pipe(pluck('chats'));
  }

  getMessages(chat:any){
    return this.http.post(this._url + '/messages', {chatId: chat}).pipe(pluck('messages'))
  }

  sendMessage(chat: any, message: string){
    return this.http.post(this._url + '/sendMessage', {chatId: chat, message: message})
  }
}
