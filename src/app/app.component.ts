import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proyect-angular';

  tasks: string[] = [];

  onTaskAdded(newTask: string) {
    this.tasks.push(newTask);
  }
}
