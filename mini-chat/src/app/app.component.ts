``;
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SendMessageComponent } from './send.message.component';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';

interface Message {
  username: string;
  content: string;
}

interface Admin {
  email: string;
}

interface User {
  email: string;
  roles: string[];
}

interface DadJoke {
  id: string;
  joke: string;

}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, SendMessageComponent],
  template: `
    @if (loggedIn){
    <send-message (send)="send($event)" />
    } @else {
    <input type="text" [(ngModel)]="username" />
    <button (click)="login()">Connexion</button>
    } 
    <button (click)="getDadJoke()">Dad joke</button>
    @for(item of array; track $index) {
    <div class="m-4 p-4  rounded " [ngClass]="{
      'mr-14 bg-gray-200' : item.username != username,
      'ml-14 bg-blue-600' : item.username == username
    }">
      <p>{{ item.username }}</p>
      <p>{{ item.content }}</p>
    </div>
    }
  `,
})
export class AppComponent {
  loggedIn = false;
  title = 'mini-chat';
  message: string = '';
  array: Message[] = [];
  username= "";
  http= inject(HttpClient);

  interval= interval(15000);

  constructor(){
    this.interval.subscribe(()=>{
      this.getDadJoke();
    })
  }


  send(message: string) {
    if(this.username){
      this.array.push({
        username: this.username,
        content: message,
    });

    }
  }

  login() {
    if(this.username){
      this.loggedIn = true;
    }
  }



  getDadJoke(){
    this.http.get<DadJoke>('https://icanhazdadjoke.com/', {headers : {"Accept": "application/json"}}).subscribe(dadMessage => {
      let message : Message={
        username: "dad",
        content : dadMessage.joke
      }
    this.array.push(message);
    });
  }
}
