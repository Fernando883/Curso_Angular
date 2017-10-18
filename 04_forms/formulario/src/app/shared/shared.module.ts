import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';

import { PieComponent } from './pie/pie.component';
import { CabeceraComponent } from './cabecera/cabecera.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LogoComponent, PieComponent, CabeceraComponent],
  exports: [PieComponent, CabeceraComponent]
})
export class SharedModule { }
