import { Component } from '@angular/core';
import { order, SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-notifications-backend',
  standalone: true,
  imports: [],
  templateUrl: './notifications-backend.component.html',
  styleUrl: './notifications-backend.component.css',
})
export class NotificationsBackendComponent {
  constructor(public socketService: SocketService) {}

  orders = this.socketService.orders;

  subscribe(): void {
    this.socketService.subscribeToOrders();
  }
}
