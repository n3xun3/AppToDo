import { createReducer, on } from '@ngrx/store';
import { crear, toogle } from './todo.action';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Salvar el mundo'),
  new Todo('Matar a Tanos'),
  new Todo('Comprar traje de aironman'),
  new Todo('Comprar pan'),
];
  
const _todoReducer = createReducer(initialState,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),
// Realizamos las desestructuracion para que no mute el objeto que pertenece al state
// Ya que el objeto es pasado por referencia y necesitaremos realizar estos pasos
// En esta acción cambiaremos el estado de la tarea a completado o no
  on(toogle, (state, { id } ) => {

    return state.map( todo =>{
      // Comprobamos que el id es el mismo y cambiamos solo el valor completado sin mutar
      if(todo.id === id){
        return {
          ...todo,
          completado: !todo.completado
        }
      } else { return todo; }

    });
  }),
);

export function todoReducer(state: any, action: any){
  return _todoReducer(state,action);
}

