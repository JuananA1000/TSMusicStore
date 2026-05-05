import './BurbujaCantidad.css';

export const BurbujaCantidad = ({ cantidad }: { cantidad: number }) => {
  return <div className='burbuja-cantidad'>{cantidad}</div>;
};
