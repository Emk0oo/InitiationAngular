import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component(
  {
    selector: 'send-message',
    standalone: true,
    imports: [
      FormsModule
    ],
    template: `
        <div class="w-full bg-slate-200 flex p-4 gap-2 items-center ">
        <input class="rounded-full " type="text" [(ngModel)]="message" placeholder="Bonjour" >
        <button class="px-2 rounded-full bg-white" (click)="_send()" > ➤ </button>
      </div>
      `
  })
export class SendMessageComponent{
  message="";

  @Output()
  send = new EventEmitter<string>();

  protected _send(){
    if(this.message){
      this.send.emit(this.message);
      this.message="";
    }
  }


}

// import { Component, EventEmitter, OnInit, Output } from "@angular/core";
// import { FormsModule } from "@angular/forms";

// @Component({
//     selector : "send-message",
//     standalone: true,
//     imports: [
//         FormsModule
//     ],
//     template: `
//           <h1 class="text-2xl font-bold uppercase" >
//         {{ title }}
//       </h1>
//       <div class="w-full bg-slate-200 flex p-4 gap-2 items-center ">
//       <input class=" rounded-full " [type]="message" [(ngModel)]="message"         placeholder="Aa."
//  />
//       <button
//         class="px-2 rounded-full bg-white"
//         (click)="send.emit(message)"
//         [(ngModel)]="title"
        
//       >
//         Envoyer
//       </button>
//     </div>
//     `
// })
// export class sendMessageComponent{
//     title = 'mini-chat';
//     message = '';
//     messages : string[] = [];

//     @Output()
//     send= new EventEmitter<string>();

//     constructor(){
//         this.send.subscribe(() => {
//             this.message= "";
//         })
//     }

// }