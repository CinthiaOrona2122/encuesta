import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './UI/navbar/navbar.component';
import { FooterComponent } from './UI/footer/footer.component';
import { ToastComponent } from './UI/toast/toast.component';
import { HamMenuComponent } from './UI/ham-menu/ham-menu.component';
import { ToolsComponent } from './UI/tools/tools.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ToastComponent,
    HamMenuComponent,
    ToolsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    ToastComponent,
    HamMenuComponent,
    ToolsComponent,
  ]
})
export class SharedModule { }
