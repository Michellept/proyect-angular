import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, of } from 'rxjs';
import { Task } from '../models/task.interface';

import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

/**
   * Carga tareas desde una API externa.
   * Se transforma el contenido usando `map`,
   * y se maneja cualquier error con `catchError`.
   */
  loadTasks(): Observable<Task[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(data => data.map(task => ({
        id: task.id,
        title: task.title,
        description: task.description,
        completed: task.completed

      }))),
      catchError(error => {
        console.error('Error cargando tareas externas:', error);
        return of([]); 
      })
    );
  }

}
