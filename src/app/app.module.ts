import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AppBootstrapModule } from './app-bootstrap.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InformationsComponent } from './informations/informations.component';
import { RouterModule, Routes} from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { EntrarComponent } from './entrar/entrar.component';
import { RegistoComponent } from './registo/registo.component';
import { AdicionarPacienteComponent } from './adicionar-paciente/adicionar-paciente.component';
import { ProfissionalAreaComponent } from './profissional-area/profissional-area.component';
import { FichaPacienteComponent } from './ficha-paciente/ficha-paciente.component';
import { AreaUtenteComponent } from './area-utente/area-utente.component';
import { FichaConsultaComponent } from './ficha-consulta/ficha-consulta.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    InformationsComponent,
    ContactosComponent,
    EntrarComponent,
    RegistoComponent,
    AdicionarPacienteComponent,
    ProfissionalAreaComponent,
    FichaPacienteComponent,
    AreaUtenteComponent,
    FichaConsultaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBootstrapModule, // it doesn´t import thst one
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
   // RouterModule.forRoot(appRoutes)
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent]

})

export class AppModule {
 
 }


