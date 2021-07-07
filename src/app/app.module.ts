import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import component
import { HomeComponent } from './home/home.component';
import { SesionComponent } from './sesion/sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { ProducComponent } from './capc/produc/produc.component';
import { HistoriaComponent } from './capc/historia/historia.component';
import { CatalComponent } from './comud/catal/catal.component';
import { ComunidComponent } from './comud/comunid/comunid.component';
import { CapaciComponent } from './capc/capaci/capaci.component';
import { FormcComponent } from './capc/formc/formc.component';
import { RecnComponent } from './comud/recn/recn.component';
import { MallasComponent } from './comud/mallas/mallas.component';
import { BiblioComponent } from './comud/biblio/biblio.component';
import { HerrmComponent } from './comud/herrm/herrm.component';
import { AprenComponent } from './comud/apren/apren.component';

//import material
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { YouTubePlayerModule } from "@angular/youtube-player";





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SesionComponent,
    RegistroComponent,
    InicioComponent,
    AyudaComponent,
    ProducComponent,
    CatalComponent,
    HistoriaComponent,
    ComunidComponent,
    CapaciComponent,
    FormcComponent,
    RecnComponent,
    MallasComponent,
    BiblioComponent,
    HerrmComponent,
    AprenComponent
  ],
  imports: [
    BrowserModule,MatIconModule,
    AppRoutingModule,MatInputModule,
    MatButtonModule,MatFormFieldModule,
    MatTabsModule,MatButtonToggleModule,
    YouTubePlayerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
