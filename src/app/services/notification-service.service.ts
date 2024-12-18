import { Injectable } from '@angular/core';
import { Client } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationServiceService {
  
  requestPermission() {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        console.log('Permiso de notificaciones:', permission);
      });
    } else {
      console.error('Este navegador no soporta notificaciones.');
    }
  }

  showNotification(title: string, options?: NotificationOptions) {
    if (Notification.permission === 'granted') {
      new Notification(title, options);
    } else {
      console.error('Permiso denegado para mostrar notificaciones.');
    }
  }

  notificationWithDelay(value: number) {
    setTimeout(() => {
      this.showNotification('Notificacion enviada desde el front', {
        body:
          'Esta es una notificaion tuvo un delay de: ' + value + ' segundos',
      });
    }, value * 1000);
  }

  dynamicNotification(order: Client) {
    this.showNotification(`Nuevo pedido para ${order.name}`, {
      body: order.products.map(p => p.name).toString(),
    });
  }
}
