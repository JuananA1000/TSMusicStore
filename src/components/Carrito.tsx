import './Carrito.css';

type Articulo = {
  id: number;
  img: string;
  nombre: string;
  precio: number;
  cantidad: number;
};

type CarritoProps = {
  articulos: Articulo[];
};

export const Carrito = ({ articulos }: CarritoProps) => {
  return (
    <div className='carrito-content'>
      <h2>Carrito</h2>
      {articulos.map((item) => (
        <div key={item.id} className='carrito-item'>
          {item.cantidad > 1 && <span className='carrito-item-cantidad'>x{item.cantidad}</span>}
          <img src={item.img} alt={item.nombre} width={100} />
          <div className='carrito-item-info'>
            <span>{item.nombre}</span>
            <span>{item.precio}€</span>
          </div>
        </div>
      ))}
    </div>
  );
};
