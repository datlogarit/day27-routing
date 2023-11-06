import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { guardsGuard } from './guards.guard';
const routes: Routes = [
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module').then((m)=>m.AdminModule),
    //canActivate:mapToCanActivate([guardsGuard]),
  },
  {
    path:'',
    redirectTo:'article',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy:PreloadAllModules,
   // enableTracing:true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
