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

  nombrePrefe: string;

  constructor() {
    this.borrar = new EventEmitter<any>();
  }

  ngOnInit() {
    this.nombrePrefe = '';
  }

  btnBorrar () {
    this.borrar.emit(this.nombrePrefe);
    console.log(this.borrar);
  }
}
