import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncuestasRoutingModule } from './encuestas-routing.module';
import { FormCacComponent } from './formularios/form-cac/form-cac.component';
import { FormIftsComponent } from './formularios/form-ifts/form-ifts.component';
import { FormCfpComponent } from './formularios/form-cfp/form-cfp.component';


@NgModule({
  declarations: [
    FormCacComponent,
    FormIftsComponent,
    FormCfpComponent
  ],
  imports: [
    CommonModule,
    EncuestasRoutingModule
  ]
})
export class EncuestasModule { }
