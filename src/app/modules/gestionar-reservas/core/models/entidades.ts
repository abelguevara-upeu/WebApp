// reserva.model.ts
export class Reserva {
  constructor(
    public id: number = 0,
    public clase: string = '',
    public vueloReferente: Vuelo = new Vuelo(),
    public clienteReferente: Cliente = new Cliente(),
    public hotelReferente: Hotel = new Hotel(),
    public sucursalReferente: Sucursal = new Sucursal()
  ) {}
}

// vuelo.model.ts
export class Vuelo {
  constructor(
    public id: number = 0,
    public fechaSalida: string = '',
    public horaSalida: string = '',
    public fechaLlegada: string = '',
    public horaLlegada: string = '',
    public origen: string = '',
    public destino: string = '',
    public nPlazasTotales: number = 0,
    public reservas?: Reserva[]
  ) {}
}

// sucursal.model.ts
export class Sucursal {
  constructor(
    public id: number = 0,
    public nombreSucursal: string = '',
    public direccion: string = '',
    public localidad: string = '',
    public provincia: string = '',
    public telefono: string = '',
    public reservas?: Reserva[]
  ) {}
}

// hotel.model.ts
export class Hotel {
  constructor(
    public id: number = 0,
    public nombreHotel: string = '',
    public direccion: string = '',
    public localidad: string = '',
    public provincia: string = '',
    public telefono: string = '',
    public numeroEstrellas: string = '',
    public reservas?: Reserva[]
  ) {}
}

// cliente.model.ts
export class Cliente {
  constructor(
    public id: number = 0,
    public nif: string = '',
    public nombres: string = '',
    public apellidos: string = '',
    public telefono: string = '',
    public email: string = '',
    public reservas?: Reserva[]
  ) {}
}
