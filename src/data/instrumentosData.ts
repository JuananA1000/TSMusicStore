import fenderStratocaster from '../assets/instruments/fenderStratocaster.jpg';
import gibsonLesPaul from '../assets/instruments/gibsonLesPaul.jpg';
import gretschUSA18WMP from '../assets/instruments/gretschUSA18WMP.jpg';
import sonorSQ2 from '../assets/instruments/sonorSQ2.jpg';
import yamahaPSRE373 from '../assets/instruments/yamahaPSRE373.jpg';
import yamahaYTR2330 from '../assets/instruments/yamahaYTR2330.jpg';

type Categoria = 'cuerda' | 'percusion' | 'teclados' | 'viento';

interface Instrumento {
  id: string;
  nombre: string;
  marca: string;
  precio: number;
  cantidad: number;
  categoria: Categoria;
  img: string;
}

export const instrumentosData: Instrumento[] = [
  {
    id: '1',
    nombre: 'Stratocaster',
    marca: 'Fender',
    precio: 1200,
    cantidad: 5,
    categoria: 'cuerda',
    img: fenderStratocaster,
  },
  {
    id: '2',
    nombre: 'Les Paul',
    marca: 'Gibson',
    precio: 1500,
    cantidad: 3,
    categoria: 'cuerda',
    img: gibsonLesPaul,
  },
  {
    id: '3',
    nombre: 'SQ2 Set Beech American Walnut',
    marca: 'Sonor',
    precio: 4899,
    cantidad: 2,
    categoria: 'percusion',
    img: sonorSQ2,
  },
  {
    id: '4',
    nombre: 'PSR-E373',
    marca: 'Yamaha',
    precio: 250,
    cantidad: 10,
    categoria: 'teclados',
    img: yamahaPSRE373,
  },
  {
    id: '5',
    nombre: 'Trumpet YTR-2330',
    marca: 'Yamaha',
    precio: 400,
    cantidad: 4,
    categoria: 'viento',
    img: yamahaYTR2330,
  },  
  {
    id: '6',
    nombre: 'USA Custom 18 WMP',
    marca: 'Gretsch Drums',
    precio: 4599,
    cantidad: 2,
    categoria: 'percusion',
    img: gretschUSA18WMP,
  },
];
