import { Component } from '@angular/core';

@Component({
  selector: 'app-projet',
  standalone: true,
  imports: [],
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.scss'
})
export class ProjetComponent {

}
export const project = {
  title: "Mon projet",
  id: "djzefjzend",
  tasks : [{
    title: "tache1",
    id:"jfjbejfejkfbjbf",
    description : "la desc",
    status : "todo",
    start : "2021-03-01",
    end : "2021-03-02"
  },{
    title: "tache2",
    id:"jfjbejfejzezeezezzekfbjbf",
    description : "la desc",
    status : "todo",
    start : "2021-03-01",
    end : "2021-03-02"
  }]
}