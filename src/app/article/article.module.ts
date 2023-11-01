import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { candeactivateGuard } from '../candeactivate.guard';

const router: Routes = [
  {
    path: 'article',
    children: [
      {
        path: '',
        component: ArticleListComponent
      },
      {
        path: ':slug',
        component: ArticleDetailComponent
      },
      {
        path: ':slug/edit',
        component: ArticleEditComponent,
        canDeactivate:[candeactivateGuard]
      }
    ]
  },
]

@NgModule({
  declarations: [ArticleDetailComponent, ArticleListComponent, ArticleEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ],
  exports: [RouterModule]
})
export class ArticleModule { }
