export interface Libro {
    autor: string;
    titulo: string;
    editorial: string;
    numpag: number;
    genero: string;
    exlibris: boolean;
    pais: Pais;
}

export interface Pais {
    codigo: string;
    nombre: string;
}
