``;
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SendMessageComponent } from './send.message.component';
import { HttpClient } from '@angular/common/http';
import { fromEvent, interval } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';
import { ParseLinkPipe } from './parse-link.pipe';

// interface Message {
//   username: string;
//   content: string;
// }

// interface Admin {
//   email: string;
// }

// interface User {
//   email: string;
//   roles: string[];
// }

// interface DadJoke {
//   id: string;
//   joke: string;

// }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('150ms', style({ opacity: 1}))
      ])
    ])
  ],
  styles: `
    :host {
      @apply block h-screen;
    }
  `,
  template: `
   <div class="p-2 w-full flex gap-2 bg-sky-900 text-white">
        <a class="hover:text-sky-200" routerLink="/messenger">Chat</a>
        <a class="hover:text-sky-200" routerLink="/projet">Projet</a>
        <a class="hover:text-sky-200" routerLink="/login">Login</a>

    </div>
    <router-outlet></router-outlet>
  `,


})
export class AppComponent {
 
}
