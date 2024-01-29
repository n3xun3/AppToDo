import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.action';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {

  @Input()
  todo!: Todo;
  
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;

  chkCompletado!: FormControl;
  txtInput!: FormControl;

  editando!: boolean;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe(valor =>{
      // Lanzamos el action que cambia la tarea a compeltada o no
      this.store.dispatch(actions.toogle({id: this.todo.id}))
    } )
  }

  editar(){
    this.editando = true;
    // le damos el valor de todo existente
    this.txtInput.setValue(this.todo.texto);
    setTimeout(()=>{
      this.txtInputFisico.nativeElement.select();
    },1)
  }

  terminarEdicion(){
    this.editando = false;
    if(this.txtInput.invalid){ return;}
    // Si no hay cambio en el texto
    if(this.txtInput.value === this.todo.texto){return;}

    this.store.dispatch(actions.editar({
      id: this.todo.id,
      texto: this.txtInput.value
    })
    );
  };

  eliminar(){
    this.store.dispatch(actions.borrar({id:this.todo.id}))
  }

}
