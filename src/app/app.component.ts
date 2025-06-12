import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from './models/task.interface';
import { ApiService } from './services/api.service';
import { TasksService } from './services/tasks.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'proyect-angular';
  cambio: boolean = false;

  tasks: Task[] = [];
  taskUpLoad: Task[] = [];
  open: boolean = false;
  view: boolean = true;
  private subscription: Subscription;

  constructor(
    private apiService: ApiService,
    private tasksService: TasksService,
    private router: Router
  ) {
    this.subscription = this.tasksService.taskChanged.subscribe(
      (tasks: Task[]) => {
        this.tasks = tasks;
      }
    );
    this.router.events.subscribe(() => {
      if (this.router.url !== '/task') {
        this.view = false;
      }
      if (this.router.url === '/task/completed' || this.router.url === '/task/deleted' || this.router.url === '/task') {
        this.view = true;
      }
    })
    this.tasksService.getFormLocalStorage();
  }
  ngOnInit(): void {
    this.tasks = this.tasksService.getTasks();
    //this.loadTasks();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // loadTasks(): void {
  //   this.apiService.loadTasks().subscribe({
  //     next: (data) => {
  //       if (Array.isArray(data)) {
  //         this.taskUpLoad = data;
  //       }
  //     },
  //     error: (error) => {
  //       console.error('Error loading tasks:', error);
  //     },
  //   });
  // }


  openTask(){
    this.open = true;
    this.router.navigate(['/create']);
  }

  addTask(newTask: Task): void {
    this.tasksService.addTask(newTask);
  }

  onTaskAdded(newTask: Task): void {
    this.addTask(newTask);
  }

  markTaskAsCompleted(task: Task): void {
    this.tasksService.completeTask(task.id);
  }

  deleteTask(id: number): void {
    this.tasksService.deleteTask(id);
  }
}
