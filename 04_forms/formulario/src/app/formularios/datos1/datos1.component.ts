import { Libro, Pais } from '../libro.model';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-datos1',
  templateUrl: './datos1.component.html',
  styleUrls: ['./datos1.component.css']
})
export class Datos1Component implements OnInit {
  oLibro: Libro;
  oLibros: Array<Libro>;
  aPaises: Array<Pais>;
  estaEnviado: boolean;
  @ViewChild('formulario') form: any;

  constructor() { }

  ngOnInit() {
    this.oLibro = {
      autor: '',
      titulo: '',
      editorial: '',
      numpag: 0,
      genero: '',
      exlibris: false,
      pais: {codigo: '', nombre: ''}
    };
    this.aPaises = [
      {codigo: 'ES', nombre: 'España'},
      {codigo: 'ING', nombre: 'Inglaterra'},
      {codigo: 'FR', nombre: 'Francia'}
    ];
    this.estaEnviado = false;
    this.oLibros = [];
  }

  btnInsert() {
    this.estaEnviado = true;
    this.oLibros.push(this.oLibro);
    console.log(this.form);
  }

  btnBorrar() {
    this.oLibro = {
      autor: '',
      titulo: '',
      editorial: '',
      numpag: 0,
      genero: '',
      exlibris: false,
      pais: {codigo: '', nombre: ''}
    };
    this.aPaises = [
      {codigo: 'ES', nombre: 'España'},
      {codigo: 'ING', nombre: 'Inglaterra'},
      {codigo: 'FR', nombre: 'Francia'}
    ];
    this.estaEnviado = false;
    console.log(this.estaEnviado);
  }
}
