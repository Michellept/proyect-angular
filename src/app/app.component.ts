import { Component } from '@angular/core';
import { Task } from './models/task.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proyect-angular';
  cambio: boolean = false;

  tasks: Task[] = [];

  onTaskAdded(newTask: Task): void {
    this.tasks.push(newTask);
  }

  markTaskAsCompleted(task: Task): void {
    task.completed = !task.completed;

  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
