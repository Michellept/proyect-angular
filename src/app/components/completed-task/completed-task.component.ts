import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/task.interface';

@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrl: './completed-task.component.scss'
})
export class CompletedTaskComponent  implements OnInit{

  taskCompleted: Task[] =[]; 
  constructor(
    private service: TasksService
  ) { }

  ngOnInit(): void {
    this.taskCompleted = this.service.getTaskCompleted();
  }
}
