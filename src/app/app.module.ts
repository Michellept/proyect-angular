import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './components/addTask/add.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatusTaksDirective } from './directives/status-taks.directive';
import { ConfirmDeleteDirective } from './directives/confirm-delete.directive';

@NgModule({
  declarations: [
    //componentes, dependencias, servicios etc
    AppComponent,
    AddComponent,
    ListTaskComponent,
    StatusTaksDirective,
    ConfirmDeleteDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule  

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
