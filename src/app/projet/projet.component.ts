import { Component, inject } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  FormArray,
} from '@angular/forms';
import { Task, TaskForm } from '../interface/projet.interface';
import { ProjetService } from '../projet/projet.service';


@Component({
  selector: 'app-projet',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.scss',
})
export class ProjetComponent {

  projectService= inject(ProjetService);

  changed= false;

  projetForm = new FormGroup({
    id: new FormControl('', { nonNullable: true, updateOn: 'blur' }),
    title: new FormControl('', { nonNullable: true, updateOn: 'blur'}),
    tasks: new FormArray<FormGroup<TaskForm>>([]),
    status: new FormArray<FormControl<string>>([]),
  });

  addStatus(status?: string){
    let control = new FormControl<string>("", {nonNullable: true});
    if (status){
      control.patchValue(status);
    }
    this.projetForm.controls.status.push(control);
  }

  ngOnInit(){
    let project = this.projectService.get();
    if(project){
      const {tasks, status, ...rest} = project;
      this.projetForm.patchValue(rest);
      tasks.forEach(task => this.addTasks(task));
      status.forEach(s => this.addStatus(s));
    }
    this.projetForm.valueChanges.subscribe(e => {
      this.changed = true;
      this.update();

    }
      );
  }

  get projet(){
    return this.projetForm.value;
  }

  addTasks(task?: Task){
    let form = new FormGroup<TaskForm>( {
      title: new FormControl("", {nonNullable: true}),
      description: new FormControl("", {nonNullable: true}),
      status: new FormControl("", {nonNullable: true}),
      start: new FormControl("", {nonNullable: true}),
      end: new FormControl("", {nonNullable: true})
    });
    if(task){
      form.patchValue(form);
    }
    this.projetForm.controls.tasks.push(form);
  }

  update(){
    this.projectService.update(this.projetForm.getRawValue());
    this.changed = false;
  }
}
// export const project = {
//   title: "Mon projet",
//   id: "djzefjzend",
//   tasks : [{
//     title: "tache1",
//     id:"jfjbejfejkfbjbf",
//     description : "la desc",
//     status : "todo",
//     start : "2021-03-01",
//     end : "2021-03-02"
//   },{
//     title: "tache2",
//     id:"jfjbejfejzezeezezzekfbjbf",
//     description : "la desc",
//     status : "todo",
//     start : "2021-03-01",
//     end : "2021-03-02"
//   }]
// }
