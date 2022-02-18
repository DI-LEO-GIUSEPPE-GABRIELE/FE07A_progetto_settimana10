import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { TodoPage } from './pages/todo/todo.page';
import { CompletedPage } from './pages/completed/completed.page';
import { NavbarComponent } from './navbar/navbar.component';


const routes:Route[] = [
  {
    path: '',
    component: TodoPage
  },
  {
    path: 'completed',
    component: CompletedPage
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TodoPage,
    CompletedPage,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
