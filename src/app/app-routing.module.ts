import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { AddComponent } from './components/addTask/add.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';

const routes: Routes = [
  {
    path: 'task',
    component: ListTaskComponent,
  },
  {
    path: 'create',
    component: AddComponent,
  },
   {
    path: 'edit/:id',
    component: EditTaskComponent,
  },
   {
    path: '',
    redirectTo: '/task',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
