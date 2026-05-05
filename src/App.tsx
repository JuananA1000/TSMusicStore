import { useState } from 'react';

import typescriptLogo from './assets/typescript.svg';

import { instrumentosData } from './data/instrumentosData';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

import { BurbujaCantidad } from './components/BurbujaCantidad';

import './App.css';

function App() {
  const [cantidad, setCantidad] = useState(0);

  const addArticulo = () => {
    setCantidad((prev) => prev + 1);

    console.log(`Añadir artículo `);
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
            <BurbujaCantidad cantidad={cantidad} />
            <ShoppingBasketOutlinedIcon sx={{ fontSize: 40 }} />
          </div>

          {instrumentosData.map((instrumento) => (
            <div key={instrumento.id} className='instr-item'>
              <img src={instrumento.img} alt={instrumento.nombre} width={140} />

              <div>
                <h2>{instrumento.nombre}</h2>
                <p>Marca: {instrumento.marca}</p>
              </div>

              <div>
                <h3> {instrumento.precio}€</h3>
                <button>
                  <ShoppingCartOutlinedIcon onClick={() => addArticulo()} />
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
