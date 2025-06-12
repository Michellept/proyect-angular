import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { Task } from '../../models/task.interface';
import { TasksService } from '../../services/tasks.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.scss',
})
export class ListTaskComponent {
  @Input('listTasks') tasks: Task[] = [];
  @Input() taskUpLoad: Task[] = [];
  @Output() taskCompleted: EventEmitter<Task> = new EventEmitter();
  @Output() taskDeleted: EventEmitter<number> = new EventEmitter();

  private subscription: Subscription;

  constructor(
    private service: TasksService,
    private router: Router
  ) {
    this.tasks = this.service.getTasks();
    this.subscription = this.service.taskChanged.subscribe(
      (tasks: Task[]) => {
        this.tasks = tasks;
      }
    );
  }

  completeTask(task: Task): void {
    this.service.completeTask(task.id);
  }
  deleteTask(id: number): void {
    this.service.deleteTask(id);
  }

  editTask(id: number): void {
    console.log(id, 'edit');
    this.router.navigate([ `/edit/${id} `]);

  }
}
