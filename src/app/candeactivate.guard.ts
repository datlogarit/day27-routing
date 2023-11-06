import { CanDeactivateFn } from '@angular/router';

import { ArticleEditComponent } from './article/article-edit/article-edit.component';


export const candeactivateGuard: CanDeactivateFn<ArticleEditComponent> = (component:ArticleEditComponent, currentRoute, currentState, nextState) => {
  return component.editting;
};
