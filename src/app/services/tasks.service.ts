import { Injectable } from '@angular/core';
import { Task } from '../models/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { }

  task:Task[]=[]

  getTasks(): Task[] {
    return this.task;
  }

  addTask(newTask: Task): void {
    this.task.push(newTask);
  }

  deleteTask(id: number): void {
    this.task = this.task.filter(task => task.id !== id);
  }

  completeTask(id: number): void {
    const task = this.task.find(task => task.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  }

  getFormLocalStorage(){
    if(typeof(Storage) !== 'undefined'){
      const savedTasks = localStorage.getItem('tasks');
      if(savedTasks){
        this.task = JSON.parse(savedTasks);
      }
    }
  }

  setLocalStorage(){
    if(typeof(Storage) !== 'undefined'){
      localStorage.setItem('tasks', JSON.stringify(this.task));
  }

  }
}
