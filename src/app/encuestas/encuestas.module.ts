import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncuestasRoutingModule } from './encuestas-routing.module';

import { FormCfpComponent } from './formularios/form-cfp/form-cfp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormEmpleabilidadComponent } from './formularios/form-empleabilidad/form-empleabilidad.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FormCfpComponent,
    FormEmpleabilidadComponent
  ],
  imports: [
    CommonModule,
    EncuestasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule

  ],
  exports: [
    FormCfpComponent,
    FormEmpleabilidadComponent
  ],
  providers: []
})
export class EncuestasModule { }
