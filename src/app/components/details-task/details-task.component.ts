import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.interface';
import { TasksService } from '../../services/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-task',
  templateUrl: './details-task.component.html',
  styleUrl: './details-task.component.scss'
})
export class DetailsTaskComponent implements OnInit {
  task: Task | undefined;
  taskId: string | null = null;
  constructor(
    private service: TasksService,
    private router: Router,
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
       this.taskId = this.route.snapshot.paramMap.get('id');
    if (this.taskId) {
      this.task = this.service.getTaskById(parseInt(this.taskId, 10));
   
    }

  }
}
