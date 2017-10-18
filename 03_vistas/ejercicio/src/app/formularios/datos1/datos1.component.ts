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
  constructor() { }

  ngOnInit() {
    this.autor = '';
    this.titulo = '';
    this.libros = [];
  }

  btnInsert() {
    this.libros.push(this.autor + ' - ' + this.titulo);
    this.autor = '';
    this.titulo = '';
  }

}
