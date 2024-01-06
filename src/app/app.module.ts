import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { FooterComponent } from './footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    CommonModule,
    TodoModule,
    BrowserModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
