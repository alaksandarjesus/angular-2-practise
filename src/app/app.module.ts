import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';


import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { ModalComponent } from './todos/modal/modal.component';
import { ConfirmComponent } from './common/modals/confirm/confirm.component';
import { LoadingComponent } from './common/modals/loading/loading.component';
import { MomentsPipe } from './pipes/moments.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';

let appRoutes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch:'full'
  },
  {
    path:'students',
    component:StudentsComponent
  },
  {
    path: 'todos',
    component: TodosComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ModalComponent,
    ConfirmComponent,
    LoadingComponent,
    MomentsPipe,
    FilterPipe,
    OnlyNumbersDirective,
    StudentsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
