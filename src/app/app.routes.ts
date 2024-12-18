import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsHomeComponent } from './pages/products/products-home/products-home.component';
import { PlatesListComponent } from './pages/products/plates-list/plates-list.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { NotificationsBackendComponent } from './pages/notifications-backend/notifications-backend.component';

export const routes: Routes = [
  {
    path: '*',
    component: DashboardComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'notifications',
    component: NotificationsComponent,
  },
  {
    path: 'push-notifications',
    component: NotificationsBackendComponent
  },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: ProductsHomeComponent,
      },
      {
        path: 'platesList',
        component: PlatesListComponent,
      },
    ],
  },
];
