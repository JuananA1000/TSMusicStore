export type ArticuloCarrito = {
  id: string;
  img: string;
  nombre: string;
  precio: number;
  cantidad: number;
};

export type Categoria = 'cuerda' | 'percusion' | 'teclados' | 'viento';

export interface Instrumento {
  id: string;
  nombre: string;
  marca: string;
  precio: number;
  stock: number;
  categoria: Categoria;
  img: string;
}

export type Articulo = {
  id: number;
  img: string;
  nombre: string;
  precio: number;
  cantidad: number;
};

export type CarritoProps = {
  articulos: Articulo[];
};
