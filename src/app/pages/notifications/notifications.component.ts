import { Component } from '@angular/core';
import {
  ProductsServiceService,
  Client,
} from '../../services/products.service';
import { GenericBtnComponent } from "../../ui/generic-btn/generic-btn.component";

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css',
})
export class NotificationsComponent {
  orders = this.productService.orders;

  constructor(private productService: ProductsServiceService) {}
}
