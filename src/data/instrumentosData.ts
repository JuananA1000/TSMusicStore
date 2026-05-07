import fenderStratocaster from '../assets/instruments/fenderStratocaster.jpg';
import gibsonLesPaul from '../assets/instruments/gibsonLesPaul.jpg';
import gretschUSA18WMP from '../assets/instruments/gretschUSA18WMP.jpg';
import sonorSQ2 from '../assets/instruments/sonorSQ2.jpg';
import yamahaPSRE373 from '../assets/instruments/yamahaPSRE373.jpg';
import yamahaYTR2330 from '../assets/instruments/yamahaYTR2330.jpg';

import type { Instrumento } from '../types/types';

export const instrumentosData: Instrumento[] = [
  {
    id: '1',
    nombre: 'Stratocaster',
    marca: 'Fender',
    precio: 899.0,
    stock: 5,
    categoria: 'cuerda',
    img: fenderStratocaster,
  },
  {
    id: '2',
    nombre: 'Les Paul',
    marca: 'Gibson',
    precio: 2499.0,
    stock: 3,
    categoria: 'cuerda',
    img: gibsonLesPaul,
  },
  {
    id: '3',
    nombre: 'SQ2 Set Beech American Walnut',
    marca: 'Sonor',
    precio: 5200.0,
    stock: 2,
    categoria: 'percusion',
    img: sonorSQ2,
  },
  {
    id: '4',
    nombre: 'PSR-E373',
    marca: 'Yamaha',
    precio: 199.0,
    stock: 10,
    categoria: 'teclados',
    img: yamahaPSRE373,
  },
  {
    id: '5',
    nombre: 'Trumpet YTR-2330',
    marca: 'Yamaha',
    precio: 429.0,
    stock: 4,
    categoria: 'viento',
    img: yamahaYTR2330,
  },
  {
    id: '6',
    nombre: 'USA Custom 18 WMP',
    marca: 'Gretsch Drums',
    precio: 4700.0,
    stock: 2,
    categoria: 'percusion',
    img: gretschUSA18WMP,
  },
];
