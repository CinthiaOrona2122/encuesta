import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { EncuestasModule } from '../encuestas/encuestas.module';
import { LoginModule } from '../login/login.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    EncuestasModule,
    LoginModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: []
})
export class HomeModule { }
