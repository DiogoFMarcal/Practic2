import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  public tasks: Task[] = [
    {
      id: uuid(),
      nombre: 'Ir às compras',
      completado: true
    },

    {
      id: uuid(),
      nombre: 'Ir ao dentista',
      completado: true
    },

    {
      id: uuid(),
      nombre: 'Ir ao mecânico',
      completado: true
    },
  ];

  get getTasks(): Task[] {
    return [...this.tasks];
  }

  public removeTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  public addTask(task: Task): void {

    //if the string that holds the task name is empty we will not save any task
    if (task.nombre.length === 0) {
      return;
    } else if (task.id.length === 0) {
      //if the id is empty we assign a new id to the new task
      task.id = uuid();
    }
    this.tasks.push(task);
  }
}