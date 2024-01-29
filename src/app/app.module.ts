import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { FooterComponent } from './footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import {enviroment} from '../enviroments/enviroment';
// NgRx
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './app.reducer';



@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    CommonModule,
    TodoModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: enviroment.production
    })
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
