import { Injectable } from '@angular/core';
import { Project } from '../interface/projet.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor() { }

  get(){
    let value = localStorage.getItem('project');
    if (value){
      return JSON.parse(value) as Project;
    }
    return undefined;
  }

  update(project: Project){
    return localStorage.setItem('project', JSON.stringify(project));
  }
}
