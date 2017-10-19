import { LibrosService } from '../servicios/libros.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input()
  public usuario: string;

  @Output()
  public borrar: EventEmitter<string>;
  sClave: string;
  aLibros: Array<String>;

  nombrePrefe: string;

  constructor(private librosServicios: LibrosService) {
    this.borrar = new EventEmitter<any>();
  }

  ngOnInit() {
    this.nombrePrefe = '';
    this.sClave = '';
    this.aLibros = [];
  }

  btnBorrar () {
    this.borrar.emit(this.nombrePrefe);
    console.log(this.borrar);
  }

  btnBuscar() {
    this.aLibros = this.librosServicios.getLibro(this.sClave);
  }
}
