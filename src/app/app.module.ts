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
import { HttpClientModule } from '@angular/common/http';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { CompletedTaskComponent } from './components/completed-task/completed-task.component';
import { DetailsTaskComponent } from './components/details-task/details-task.component';
import { DeletedTasksComponent } from './components/deleted-tasks/deleted-tasks.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    //componentes, dependencias, servicios etc
    AppComponent,
    AddComponent,
    ListTaskComponent,
    StatusTaksDirective,
    ConfirmDeleteDirective,
    EditTaskComponent,
    CompletedTaskComponent,
    DetailsTaskComponent,
    DeletedTasksComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
