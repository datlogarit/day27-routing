import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';
import { AdminComponent } from './admin.component';
import { ToggleComponent } from '../toggle/toggle.component';
import { CommonModule } from '@angular/common';

const router: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: AdminDetailComponent
      },
    ]
  }
]

@NgModule({
  declarations: [AdminComponent, AdminDetailComponent, ToggleComponent],
  imports: [
    RouterModule.forChild(router),
    CommonModule],
  exports: [RouterModule]
})
export class AdminModule { }
