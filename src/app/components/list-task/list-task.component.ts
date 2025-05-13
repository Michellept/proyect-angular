import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.interface';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.scss'
})
export class ListTaskComponent{
  @Input('listTasks') tasks:Task [] = [];
  @Output() taskCompleted: EventEmitter<Task> = new EventEmitter();
  @Output() taskDeleted: EventEmitter<number> = new EventEmitter();

  constructor() {}


  completeTask(task: Task): void {
    this.taskCompleted.emit(task);

  }
  deleteTask(id: number): void {
    this.taskDeleted.emit(id);
  }
}
