import { createReducer, on } from '@ngrx/store';
import { crear } from './todo.action';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('Matar a Tanos'),
  new Todo('Comrpar traje de aironman'),
  new Todo('Comrpar pan'),
];
  
const _todoReducer = createReducer(initialState,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),
);

export function todoReducer(state: any, action: any){
  return _todoReducer(state,action);
}
