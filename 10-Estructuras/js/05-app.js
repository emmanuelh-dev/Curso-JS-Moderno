//Swich
const metodoPago = 'Efectivo';
switch (metodoPago) {
  case 'Efectivo':
    console.log('Pago efectivo');
    break;
  case 'Tarjeta':
    console.log('Pago tarjeta');
    break;
    default:
      console.log('Efectivo');
      break;
}