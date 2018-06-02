import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InformationsComponent } from './informations/informations.component';
import { RegistoComponent } from './registo/registo.component';
import { AdicionarPacienteComponent } from './adicionar-paciente/adicionar-paciente.component';
import { ProfissionalAreaComponent } from './profissional-area/profissional-area.component';
import { FichaPacienteComponent } from './ficha-paciente/ficha-paciente.component';
import { AreaUtenteComponent } from './area-utente/area-utente.component';
import { FichaConsultaComponent } from './ficha-consulta/ficha-consulta.component';


const routes: Routes = [
{
  path:'',
  component:HomeComponent
},
{
  path:'entrar',
  component:EntrarComponent
}
,
{
  path:'info',
  component:InformationsComponent
},
{
  path:'contactos',
  component:ContactosComponent
}
,
{
  path:'registo',
  component:RegistoComponent
}

,
{
  path:'adpaciente',
  component:AdicionarPacienteComponent
}

,
{
  path:'prof',
  component:ProfissionalAreaComponent
}

,
{
  path:'ficha',
  component:FichaPacienteComponent
}

,
{
  path:'areautente',
  component:AreaUtenteComponent
}

,
{
  path:'fichaconsulta',
  component:FichaConsultaComponent
}


 // path:'',
 // component:EntrarCompone
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
