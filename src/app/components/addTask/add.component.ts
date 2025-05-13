import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  // template: '<h1>Hola, esta no es buena practica</h1>
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  @Output() taskCreated = new EventEmitter<string>();
  taskForm!: FormGroup;

  numberTanks: number = 10;
  isActive: boolean = true;
  taskActive!: boolean;

  tanks:any[] = [
    { name: 'tank1', id: 1 },
    { name: 'tank2', id: 2 },
    { name: 'tank3', id: 3 },
    { name: 'tank4', id: 4 },
    { name: 'tank5', id: 5 },
    { name: 'tank6', id: 6 },
    { name: 'tank7', id: 7 },
    { name: 'tank8', id: 8 },
    { name: 'tank9', id: 9 },
    { name: 'tank10', id: 10 },
  ]

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

      //     this.taskCreated.emit(this.taskForm.value.taskName);
      //     this.taskForm.reset();
    } else {
      this.taskActive = true;
    }
  }

  ngOnDestroy(): void {
    console.log('bye, componente add task');
  }
}
