import { useState } from 'react';

import typescriptLogo from './assets/typescript.svg';

import { instrumentosData } from './data/instrumentosData';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

import { BurbujaCantidad } from './components/BurbujaCantidad';
import { Agotado } from './components/Agotado';
import { Carrito } from './components/Carrito';

import './App.css';

type ArticuloCarrito = {
  id: string;
  img: string;
  nombre: string;
  precio: number;
  cantidad: number;
};

function App() {
  const [articulosEnCarrito, setArticulosEnCarrito] = useState<ArticuloCarrito[]>([]);
  const [instrumentos, setInstrumentos] = useState(instrumentosData);
  const [verCarrito, setVerCarrito] = useState(false);

  const totalArticulosCarrito = articulosEnCarrito.reduce((sum, item) => sum + item.cantidad, 0);

  const addArticulo = (id: string) => {
    const instrumentoEncontrado = instrumentos.find((instr) => instr.id === id);

    if (instrumentoEncontrado && instrumentoEncontrado.stock > 0) {
      setArticulosEnCarrito((prev) => {
        const existeEnCarrito = prev.find((item) => item.id === id);

        if (existeEnCarrito) {
          return prev.map((item) => (item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item));
        }

        return [...prev, { ...instrumentoEncontrado, cantidad: 1 }];
      });

      setInstrumentos((prev) =>
        prev.map((instr) => (instr.id === id && instr.stock > 0 ? { ...instr, stock: instr.stock - 1 } : instr)),
      );

      console.log(`Añadir artículo ${id}`);
    }
  };

  const toggleVerCarrito = () => {
    setVerCarrito((prev) => !prev);

    console.log(`Tienes ${totalArticulosCarrito} artículos en el carrito`);
  };

  return (
    <>
      <section id='center'>
        <div className='header'>
          <img src={typescriptLogo} className='base' width='170' height='179' alt='' />
          <h1>TypeScript Music Store</h1>
        </div>

        <div className='instr-list'>
          <div className='shopping-cart'>
            {totalArticulosCarrito > 0 && <BurbujaCantidad cantidad={totalArticulosCarrito} />}
            <ShoppingBasketOutlinedIcon sx={{ fontSize: 40 }} onClick={toggleVerCarrito} />
            {verCarrito && <Carrito articulos={articulosEnCarrito} />}
          </div>

          {instrumentos.map((instrumento) => (
            <div key={instrumento.id} className='instr-item'>
              <img src={instrumento.img} alt={instrumento.nombre} width={140} />

              <div>
                <h2>{instrumento.nombre}</h2>
                <p>Marca: {instrumento.marca}</p>
              </div>

              <div>
                <h3> {instrumento.precio}€</h3>
                <button onClick={() => addArticulo(instrumento.id)} disabled={instrumento.stock === 0}>
                  <ShoppingCartOutlinedIcon />
                </button>
              </div>
              {instrumento.stock === 0 && <Agotado />}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
