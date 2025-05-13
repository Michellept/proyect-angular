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
  @Output() taskCreated = new EventEmitter<string>();
  taskForm!: FormGroup;
  isActive!: boolean;
  taskActive!: boolean;

  task: Task[] = [
    { id: 1, title: 'Tarea 1', completed: false },
    { id: 2, title: 'Tarea 2', completed: true },
    { id: 3, title: 'Tarea 3', completed: false },
    { id: 4, title: 'Tarea 4', completed: true },
    { id: 5, title: 'Tarea 5', completed: false },
    
  ]

    numbertask: number = this.task.length;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Inicializar el formulario, Formulario reactivo
    this.taskForm = this.fb.group({
      taskName: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  addTask() {
    
    if (this.taskForm.valid && this.taskForm.get('taskName')?.value !== '') {
      this.taskActive = false;
      const taskName = this.taskForm.get('taskName')?.value;
      const newTask: Task = {
        id: this.task.length + 1,
        title: taskName,
        completed: false,
      };
      this.task.push(newTask);

      //     this.taskCreated.emit(this.taskForm.value.taskName);
      //     this.taskForm.reset();
    } else {
      this.taskActive = true;
    }
  }

  ngOnDestroy(): void {
    console.log('bye, componente add task');
  }

  markTaskCompleted(task: Task):void {
    task.completed = !task.completed;
    
  }

  delete(id:number):void {
    this.task = this.task.filter(task => task.id !== id);
    this.numbertask = this.task.length;
  }

}
