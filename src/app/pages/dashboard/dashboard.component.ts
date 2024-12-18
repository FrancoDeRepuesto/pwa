import { Component } from '@angular/core';
import { GenericBtnComponent } from '../../ui/generic-btn/generic-btn.component';
import { NotificationServiceService } from '../../services/notification-service.service';
import {
  ProductsServiceService,
  Client,
} from '../../services/products.service';
import { SocketService } from '../../services/socket.service';
import { PushNotificationsService } from '../../services/push-notification.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [GenericBtnComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(
    private notificationService: NotificationServiceService,
    private prodService: ProductsServiceService,
    private pushNotificationService: PushNotificationsService
  ) {}

  requestPermision() {
    this.notificationService.requestPermission();
  }

  sendNotification() {
    this.notificationService.showNotification('Titulo', {
      body: 'Cuerpo de la not',
      icon: 'assets/icons/icon-96x96.png',
    });
  }

  sendNotificationwithDelay(value: number) {
    this.notificationService.notificationWithDelay(5);
  }

  dynamicNotification() {
    this.prodService.generateData();
  }

  requestPushNotificationsPermision() {
    this.pushNotificationService.requestPermission();
  }

  suscribeToOrders() {
    this.pushNotificationService.initializePush().catch((error) => {
      console.error(
        'Error al inicializar suscripción de notificaciones push',
        error
      );
    });
  }
}
