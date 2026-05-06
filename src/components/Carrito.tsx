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
    <div>
      {/* <h2>Carrito</h2> */}
      {articulos.map((item) => (
        <div key={item.id}>
          <img src={item.img} alt={item.nombre} width={100} />
          {item.nombre} - {item.precio}€
        </div>
      ))}
    </div>
  );
};
