// push-notifications.service.ts

import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class PushNotificationsService {
  private serviceWorkerRegistration: ServiceWorkerRegistration | null = null;

  constructor() {}

  // Inicializa la suscripción
  async initializePush() {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      try {
        // Registrar el service worker
        this.serviceWorkerRegistration = await navigator.serviceWorker.register(
          '/service-worker.js'
        );
        // Obtener la suscripción
        const subscription = await this.subscribeUserToPush();
        return subscription; // Aquí se devuelve la suscripción
      } catch (error) {
        console.error('Error al inicializar push', error);
        return null; // Si hay error, se devuelve null para evitar que se quede sin retorno
      }
    }
    return null; // Si 'serviceWorker' o 'PushManager' no están disponibles, devuelve null
  }

  // Solicitar la suscripción al servicio de Push
  async subscribeUserToPush() {
    if (!this.serviceWorkerRegistration) {
      throw new Error('Service Worker no registrado');
    }

    const applicationServerKey = this.urlBase64ToUint8Array(
      'BHHkQx8yf52ciquS5BOJ_VkDDxIlbCCnzgCZjy0moSxXSP1uXLQO7XS8fb6IwiSwtbIASDN7MYa1vnTxQeUkHd4'
    );
    const pushSubscription =
      await this.serviceWorkerRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey,
      });

    // Enviar la suscripción al servidor para ser guardada
    this.sendSubscriptionToServer(pushSubscription);

    return pushSubscription;
  }

  // Enviar la suscripción al backend
  sendSubscriptionToServer(subscription: PushSubscription) {
    const socket = io('http://localhost:3000'); // Asegúrate de que esté conectado a tu servidor Socket.io

    socket.emit('subscribe', subscription);
  }

  // Convertir la clave pública en formato URL Safe Base64 a Uint8Array
  urlBase64ToUint8Array(base64String: string) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/\_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }

    return outputArray;
  }

  requestPermission() {
    return new Promise<void>((resolve, reject) => {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          console.log('Notificaciones habilitadas');
          resolve();
        } else {
          reject('Permiso denegado');
        }
      });
    });
  }
}
