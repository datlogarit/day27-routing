import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';
import { AdminComponent } from './admin.component';

const router:Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {
        path:'',
        component:AdminDetailComponent
      },
    ]
  }
]

@NgModule({
  declarations: [AdminComponent, AdminDetailComponent],
  imports: [
    RouterModule.forChild(router),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AdminModule { }
