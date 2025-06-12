import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { AddComponent } from './components/addTask/add.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { CompletedTaskComponent } from './components/completed-task/completed-task.component';
import { DetailsTaskComponent } from './components/details-task/details-task.component';
import { DeletedTasksComponent } from './components/deleted-tasks/deleted-tasks.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guard/auth-guards.guard';
import { authGuardChildGuard } from './guard/auth-guard-child.guard';

const routes: Routes = [
  {
    path: 'task',
    component: ListTaskComponent, 
    canActivate: [AuthGuard],
    canActivateChild: [authGuardChildGuard],
    children: [ // se tiene que agregar <router-outlet></router-outlet> en el padre, en este caso la raiz es takList
      {
        path: 'completed',
        component: CompletedTaskComponent, 
      },
       {
        path: 'details/:id',
        component: DetailsTaskComponent, 
      },
         {
        path: 'deleted',
        component: DeletedTasksComponent, 
      },
    ],
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
    path: 'login',
    component: LoginComponent,
  }
  ,
   {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
