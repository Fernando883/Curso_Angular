import { extend } from 'webdriver-js-extender/built/lib';
class Libro{
    public tematica: string
    private paginas: number;
    precio: number;
    capitulos: Array<string>;

    constructor(tematica, paginas){
        this.tematica = tematica;
        this.paginas = paginas;
    }
}

class LibroTecnico implements DatosLibro{
    tematica: String;
    paginas: number;
            
}

interface DatosLibro{
    tematica: String;
    paginas: number;
}
