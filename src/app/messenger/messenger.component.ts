import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SendMessageComponent } from '../send.message.component';
import { HttpClient } from '@angular/common/http';
import { fromEvent, interval } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';
import { ParseLinkPipe } from '../parse-link.pipe';
import { Message } from '../interface/messenger.interface';

@Component({
  selector: 'app-messenger',
  standalone: true,
  imports: [CommonModule, FormsModule, SendMessageComponent, ParseLinkPipe],
  templateUrl: './messenger.component.html',
  styleUrl: './messenger.component.scss'
  // animations: [
  //   trigger('fadeIn', [
  //     transition(':enter', [
  //       style({ opacity: 0 }),
  //       animate('150ms', style({ opacity: 1}))
  //     ])
  //   ])
  // ],
})
export class MessengerComponent {
  loggedIn = false;
  title = 'mini-chat';
  message: string = '';
  array: Message[] = [];
  username= "";
  http= inject(HttpClient);

  interval= interval(15000);

  constructor(){
    fromEvent(window, 'storage').subscribe((event)=> {
      let messages = localStorage.getItem("messages");
      if(messages){
        let parsedMessages = JSON.parse(messages);
        this.array = parsedMessages;
      }
    })
    // this.interval.subscribe(()=>{
    //   this.getDadJoke();
    // })
  }


  send(message: string) {
    if(this.username){
      this.array.push({
        username: this.username,
        content: message,
    });
    localStorage.setItem("messages", JSON.stringify(this.array)); //remplacer array par messages si fonctionne pas 

    }
  }

  login() {
    if(this.username){
      this.loggedIn = true;
    }
  }



  // getDadJoke(){
  //   this.http.get<DadJoke>('https://icanhazdadjoke.com/', {headers : {"Accept": "application/json"}}).subscribe(dadMessage => {
  //     let message : Message={
  //       username: "dad",
  //       content : dadMessage.joke
  //     }
  //   this.array.push(message);
  //   });
  // }
}
