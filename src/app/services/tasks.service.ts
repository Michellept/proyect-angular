import { Injectable } from '@angular/core';
import { Task } from '../models/task.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor() {}

  task: Task[] = [];
  taskChanged = new Subject<Task[]>(); // Subject para emitir cambios a los componentes

  getTasks(): Task[] {
    return this.task;
  }

  addTask(newTask: Task): void {
    this.task.push(newTask);
    this.setLocalStorage();
    this.taskChanged.next(this.task.slice());
  }

  deleteTask(id: number): void {
    this.task = this.task.filter((task) => task.id !== id);
    this.setLocalStorage();
    this.taskChanged.next(this.task.slice());
  }

  completeTask(id: number): void {
    const task = this.task.find((task) => task.id === id);
    if (task) {
      task.completed = !task.completed;
      this.setLocalStorage();
      this.taskChanged.next(this.task.slice());
    }
  }

  getFormLocalStorage() {
    if (typeof Storage !== 'undefined') {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        this.task = JSON.parse(savedTasks);
        this.taskChanged.next(this.task.slice());
      }
    }
  }

  getTaskById(id: number): Task | undefined {
    return this.task.find((task) => task.id === id);
  }

  editTask(updateTask: Task){
    const index = this.task.findIndex((task) => task.id === updateTask.id);
    if (index !== -1) {
      this.task[index] = updateTask;
      this.setLocalStorage();
      this.taskChanged.next(this.task.slice());
    }
  }

  setLocalStorage() {
    if (typeof Storage !== 'undefined') {
      localStorage.setItem('tasks', JSON.stringify(this.task));
      this.taskChanged.next(this.task.slice());
    }
  }
}
