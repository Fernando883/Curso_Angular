import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Datos1Component } from './datos1/datos1.component';
import { Datos2Component } from './datos2/datos2.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [Datos1Component, Datos2Component],
  exports: [Datos1Component, Datos2Component]
})
export class FormulariosModule { }
