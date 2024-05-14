import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCfpComponent } from './formularios/form-cfp/form-cfp.component';
import { FormEmpleabilidadComponent } from './formularios/form-empleabilidad/form-empleabilidad.component';
import { adminGuard } from '../guards/admin.guard';

const routes: Routes = [

  {
    path: 'inter/:id',
    component: FormCfpComponent
  },
  {
    path: 'encuesta/:id',
    component: FormEmpleabilidadComponent,
  }


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncuestasRoutingModule { }
