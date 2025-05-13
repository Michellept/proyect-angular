import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../models/task.interface';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // Inicializar el formulario, Formulario reactivo
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
      }
      this.taskActive = false;
      this.taskCreated.emit(newTask);
      this.taskForm.reset();
    } else {
      this.taskActive = true;
    }
  }

  ngOnDestroy(): void {
    console.log('bye, componente add task');
  }

}
