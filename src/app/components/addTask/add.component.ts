import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../models/task.interface';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  // template: '<h1>Hola, esta no es buena practica</h1>
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  @Output() taskCreated: EventEmitter<Task> = new EventEmitter<Task>();
  taskForm!: FormGroup;
  taskActive!: boolean;

  constructor(private fb: FormBuilder, private service: TasksService, private router:Router ) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      taskName: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  addTask() {
    if (this.taskForm.valid && this.taskForm.get('taskName')?.value !== '') {
      const newTask: Task = {
        id: Math.floor(Math.random() * 1000),
        title: this.taskForm.get('taskName')?.value,
        completed: false,
      };
      this.taskActive = false;
      this.service.addTask(newTask);
      this.router.navigate(['/task']);
    } else {
      this.taskActive = true;
    }
  }

  ngOnDestroy(): void {
    console.log('bye, componente add task');
  }


}
