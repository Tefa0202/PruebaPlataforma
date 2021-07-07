import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importar componentes 
import { HomeComponent } from './home/home.component';
import { SesionComponent } from './sesion/sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { ProducComponent } from './capc/produc/produc.component';
import { HistoriaComponent } from './capc/historia/historia.component';
import { CapaciComponent } from './capc/capaci/capaci.component';
import { FormcComponent } from './capc/formc/formc.component';
import { CatalComponent } from './comud/catal/catal.component';
import { ComunidComponent } from './comud/comunid/comunid.component';
import { RecnComponent } from './comud/recn/recn.component';
import { MallasComponent } from './comud/mallas/mallas.component';
import { BiblioComponent } from './comud/biblio/biblio.component';
import { HerrmComponent } from './comud/herrm/herrm.component';
import { AprenComponent } from './comud/apren/apren.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'iniciar.sesi', component: SesionComponent},
  { path: 'registro', component: RegistroComponent},
  { path: 'inicio', component: InicioComponent},
  { path: 'ayuda', component: AyudaComponent},
  { path: 'capaci', component: CapaciComponent},
  { path: 'cap.proc', component: ProducComponent},
  { path: 'cap.hist', component: HistoriaComponent},
  { path: 'cap.form', component: FormcComponent},
  { path: 'comunid', component: ComunidComponent},
  { path: 'comu.catl', component: CatalComponent},
  { path: 'comu.recn', component: RecnComponent},
  { path: 'comu.mall', component: MallasComponent},
  { path: 'comu.bilio', component: BiblioComponent},
  { path: 'comu.herrms', component: HerrmComponent},
  { path: 'comu.aprend', component: AprenComponent},
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
