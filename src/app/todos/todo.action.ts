import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TDO] Crear todo',
  props<{texto: string}>()
);
