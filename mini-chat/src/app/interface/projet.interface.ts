import { FormArray, FormControl } from "@angular/forms";

export interface Project {
    id: string;
    title: string;
    tasks: Task[];
    status: string[];
};

export interface Task {
    title: string;
    description: string;
    status: string;
    start: string;
    end: string;
}

export interface TaskForm {
    title: FormControl<string>;
    description: FormControl<string>;
    status: FormControl<string>;
    start: FormControl<string>;
    end: FormControl<string>;
}

export interface ProjectForm{
    id: FormControl<string>;
    title: FormControl<string>;
    tasks: FormArray<FormControl<Task[]>>;
    status: FormArray<FormControl<string>>;
}