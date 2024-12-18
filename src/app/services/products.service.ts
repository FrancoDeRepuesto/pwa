import { Injectable, signal } from '@angular/core';
import { faker } from '@faker-js/faker';
import { NotificationServiceService } from './notification-service.service';

export interface Producto {
  id: number;
  name: string;
  price: number;
}

export interface Client {
  name: string;
  products: Producto[];
}

@Injectable({
  providedIn: 'root',
})
export class ProductsServiceService {
  public orders = signal<Client[]>([]);

  constructor(private notificationService: NotificationServiceService) {}

  generateData(): Client {
    const name = faker.person.fullName();

    const products: Producto[] = Array.from({ length: 5 }).map((_, index) => ({
      id: index + 1,
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price()),
    }));

    const newOrder: Client = { name, products };
    this.orders.update((orders) => [...orders, newOrder]);
    this.notificationService.dynamicNotification(newOrder);
    return newOrder;
  }
}
