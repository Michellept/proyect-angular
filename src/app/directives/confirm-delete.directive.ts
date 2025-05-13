import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appConfirmDelete]'
})
export class ConfirmDeleteDirective {

  @Input('appConfirmDelete') taskTitle: string = '';
  constructor() { }

  @HostListener('click', ['$event']) onClick(event: Event) {
    event.stopPropagation(); // Evita que el evento de clic se propague a otros elementos
    event.preventDefault(); // Evita el comportamiento predeterminado del clic
    const confirmation = confirm(`¿Deseas eliminar la tarea "${this.taskTitle}"?`);
    if (confirmation) {
      alert(`Tarea "${this.taskTitle}" eliminada.`);
    } 
  }

}
