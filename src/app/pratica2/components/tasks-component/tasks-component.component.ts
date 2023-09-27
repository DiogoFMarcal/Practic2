import { Component } from '@angular/core';
import { TaskService } from '../../services/task-service.service';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-tasks-component',
  templateUrl: './tasks-component.component.html',
  styleUrls: ['./tasks-component.component.css']
})
export class TasksComponentComponent {

  //task for form
  public task: Task = {
    id: '',
    nombre: '',
    completado: false
  };

  constructor(private taskService: TaskService) { }

  get getTasks(): Task[] {
    return [...this.taskService.getTasks];
  }

  public addNewTask(): void {
    this.taskService.addTask(this.task);

    //clean task attributes
    this.task = {
      id: '',
      nombre: '',
      completado: false
    };
  }

  public removeTask(id: string): void {
    this.taskService.removeTask(id);
  }
}