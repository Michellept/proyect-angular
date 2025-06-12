import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../models/task.interface';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.scss',
})
export class EditTaskComponent {
  
  taskId: string | null = null
  task: Task | undefined;
  taskActive!: boolean;
  taskForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private service: TasksService,
    private router: Router,
    private route:ActivatedRoute
  ) {
  
  }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      taskName: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });

    this.taskId = this.route.snapshot.paramMap.get('id');
    if (this.taskId) {
      this.task = this.service.getTaskById(parseInt(this.taskId, 10));
      if (this.task) {
        this.taskForm.patchValue({ taskName: this.task.title });
      }
    }


  }

  updateTask() {
    if (this.taskForm.valid && this.taskId &&this.taskForm.get('taskName')?.value !== '') {
      const newTask: Task = {
        id: parseInt(this.taskId, 10),
        title: this.taskForm.value.taskName,
        description: this.taskForm.value.description,
        completed: this.task? this.task.completed : false,
      };
      this.service.editTask(newTask);
      this.router.navigate(['/task']);
    }
    
  }
}
