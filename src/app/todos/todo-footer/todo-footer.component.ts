import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import * as actions from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.css'
})
export class TodoFooterComponent implements OnInit{

  filtroActual: string = 'todos';
  filtros: string[] = ['todos', 'completados','pendientes'];

  pendiente: number = 0;


  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    /*this.store.select('filtro').subscribe(filtro => {
      this.filtroActual = filtro;
    })*/
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      // Contamos los TODO que estna en pendientes
      this.pendiente = state.todos.filter( todo => !todo.completado).length
    })
  }

  cambiarFiltro(filtro:string){
    this.store.dispatch(actions.setFiltro({filtro}));
  }

}
