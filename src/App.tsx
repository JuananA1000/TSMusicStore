import { useState } from 'react';

import typescriptLogo from './assets/typescript.svg';

import { instrumentosData } from './data/instrumentosData';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

import { BurbujaCantidad } from './components/BurbujaCantidad';

import './App.css';

function App() {
  const [articulosEnCarrito, setArticulosEnCarrito] = useState(0);
  const [instrumentos, setInstrumentos] = useState(instrumentosData);

  const addArticulo = (id: string) => {
    setArticulosEnCarrito((prev) => prev + 1);

    setInstrumentos((prev) =>
      prev.map((instr) => (instr.id === id && instr.cantidad > 0 ? { ...instr, cantidad: instr.cantidad - 1 } : instr)),
    );

    console.log(`Añadir artículo ${id}`);
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
            {articulosEnCarrito > 0 && <BurbujaCantidad cantidad={articulosEnCarrito} />}
            <ShoppingBasketOutlinedIcon sx={{ fontSize: 40 }} />
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
                <button onClick={() => addArticulo(instrumento.id)} disabled={instrumento.cantidad === 0}>
                  <ShoppingCartOutlinedIcon />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
