import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos1',
  templateUrl: './datos1.component.html',
  styleUrls: ['./datos1.component.css']
})
export class Datos1Component implements OnInit {
  autor: string;
  titulo: string;
  libros: Array<string>;
  precio: number;
  birthday: Date;
  constructor() { }

  ngOnInit() {
    this.autor = '';
    this.titulo = '';
    this.libros = [];
    this.precio = 23;
    this.birthday = new Date(2017, 3, 15); // April 15, 1988
  }

  btnInsert() {
    if (this.autor !== 'Fernando') {
      this.libros.push(this.autor + ' - ' + this.titulo);
    }
    this.autor = '';
    this.titulo = '';
  }

  btnBorrar() {
    if (this.libros.length !== -1) {
      this.libros.splice(this.libros.length - 1, 1);
    }
  }

}
