import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { ModalComponent } from './todos/modal/modal.component';
import { ConfirmComponent } from './common/modals/confirm/confirm.component';
import { LoadingComponent } from './common/modals/loading/loading.component';
import { MomentsPipe } from './pipes/moments.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ModalComponent,
    ConfirmComponent,
    LoadingComponent,
    MomentsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
