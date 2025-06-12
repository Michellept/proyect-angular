import { Injectable } from '@angular/core';
import { Task } from '../models/task.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor() {}

  task: Task[] = [];
  taskCompleted: Task[] = [];
  taskChanged = new Subject<Task[]>(); // Subject para emitir cambios a los componentes
  taskDeleted: Task[] = [];
  taskDeletedChanged = new Subject<Task[]>();

  isAuthenticated : boolean = false; 
  token:boolean = false;

  login(){
    this.isAuthenticated = true
  }

  isLoggedIn(): boolean{
    return this.isAuthenticated    
  }
   
  authRoutesChild():boolean{
    return this.token
  }

  

  getTasks(): Task[] {
    return this.task;
  }

  getTaskCompleted(): Task[] {
    this.getFormLocalStorage();
    this.taskCompleted = this.task.filter((task) => task.completed);
    return this.taskCompleted;
  }

  addTask(newTask: Task): void {
    this.task.push(newTask);
    this.setLocalStorage();
    this.taskChanged.next(this.task.slice());
  }

  deleteTask(id: number): void {
    const taskToDelete = this.task.find((task) => task.id === id);
    if (taskToDelete) {
      this.taskDeleted.push(taskToDelete);
      this.task = this.task.filter((task) => task.id !== id);
      this.setLocalStorage();
      this.taskChanged.next(this.task.slice());
    }
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
      const deletedTask = localStorage.getItem('taskDeleted');
      if (deletedTask) {
        this.taskDeleted = JSON.parse(deletedTask);
        this.taskDeletedChanged.next(this.taskDeleted.slice());
      }
    }
  }

  getTaskDeleted(): Task[] {
    return this.taskDeleted;
  }

  returnTaskDeleted(task: Task): void {
    if(!this.task.some((t) => t.id === task.id)){
      this.task.push(task);
      this.taskDeleted = this.taskDeleted.filter((t) => t.id !== task.id);
      this.taskChanged.next(this.task.slice());
      this.taskDeletedChanged.next(this.taskDeleted.slice()); 
      this.setLocalStorage();
    }
  }

  getTaskById(id: number): Task | undefined {
    return this.task.find((task) => task.id === id);
  }

  editTask(updateTask: Task) {
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
      localStorage.setItem('taskDeleted', JSON.stringify(this.taskDeleted));
      this.taskChanged.next(this.task.slice());
    }
  }
}
