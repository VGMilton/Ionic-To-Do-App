import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'dashboard',
        loadChildren:()=>import('../pages/dashboard/dashboard.module').then(m=>m.DashboardPageModule)
      },
      {
        path:'todos',
        loadChildren:()=>import('../pages/todos/todos.module').then(m=>m.TodosPageModule)
      },
      {
        path:'completed',
        loadChildren:()=>import('../pages/completed/completed.module').then(m=>m.CompletedPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
