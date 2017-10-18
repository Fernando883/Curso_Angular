import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-datos2',
  templateUrl: './datos2.component.html',
  styleUrls: ['./datos2.component.css']
})
export class Datos2Component implements OnInit {
  sNombre: string;
  @ViewChild('inputNombre') eNombre: ElementRef;
  constructor() { }

  ngOnInit() {
    this.sNombre = 'Pepe';
  }

  btnBorrar() {
    this.sNombre = '';
  }

}
