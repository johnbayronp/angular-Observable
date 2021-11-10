import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListPersonasComponent } from './list-personas/list-personas.component';
import { ApiService } from './api.service';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    FormularioComponent,
    ListPersonasComponent,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
