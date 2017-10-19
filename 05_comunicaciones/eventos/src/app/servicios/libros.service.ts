import { Injectable } from '@angular/core';

@Injectable()
export class LibrosService {

  constructor() { }

  getLibro(clave: string) {
    return [
      'Angular basico',
      'Angular intermedio',
      'Angular avanzado'
    ];
  }
}
