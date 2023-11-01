import { CanDeactivateFn } from '@angular/router';
import { AdminModule } from './admin/admin.module';

export const candeactivateGuard: CanDeactivateFn<AdminModule> = (component, currentRoute, currentState, nextState) => {
  return true;
};
