import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  curso: string;

  constructor() { }

  ngOnInit() {
    this.curso = 'Angular 4.x';
  }

}
