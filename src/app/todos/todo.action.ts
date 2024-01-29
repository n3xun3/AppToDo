import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TDO] Crear Todo',
  props<{texto: string}>()
);

export const toogle = createAction(
  '[TDO] Toggle Todo',
  props<{id: number}>()
);

export const editar = createAction(
  '[TDO] Editar Todo',
  props<{id: number, texto: string}>()
);
