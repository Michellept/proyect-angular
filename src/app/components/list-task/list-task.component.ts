import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.scss'
})
export class ListTaskComponent implements OnInit {
  @Input() tasks: string[] = []; 

  constructor() {}

  ngOnInit(): void {
    console.log('task-list component initialized');
  }

  ngOnChanges(): void {
    // Este hook se ejecuta cuando hay cambios en los datos vinculados.
    console.log('task-list component changes detected');
  }

  ngOnDestroy(): void {
    // Este hook se ejecuta cuando el componente está por ser destruido.
    console.log('task-list component destroyed');
  }

  addTask(task: string): void {
    this.tasks.push(task);
  }
}
