import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { ApoliceComponent } from './apolice/apolice.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    RodapeComponent,
    ListaClienteComponent,
    ApoliceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
