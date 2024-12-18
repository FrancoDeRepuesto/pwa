import { Injectable, signal, WritableSignal } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

export interface Producto {
  id: string;
  name: string;
  price: string;
  quantity: number;
}

export interface order {
  name: string;
  products: Producto[];
}

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: Socket;

  // Signal para almacenar los pedidos
  orders: WritableSignal<any[]> = signal([]);

  constructor() {
    this.socket = io('http://localhost:3000'); // URL del backend
  }

  // Método para iniciar la suscripción
  subscribeToOrders(): void {
    this.socket.on('nuevaOrden', (data) => {
      // Actualiza el signal agregando nuevos pedidos a la lista existente
      this.orders.update((currentOrders) => [...currentOrders, data]);
    });
  }

  // Método opcional para limpiar la suscripción
  unsubscribe(): void {
    this.socket.off('nuevaOrden');
  }
}
