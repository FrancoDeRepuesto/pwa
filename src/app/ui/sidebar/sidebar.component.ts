import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GenericBtnComponent } from "../generic-btn/generic-btn.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, GenericBtnComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  isOpen = false;

  toggleBarState() {
    this.isOpen = !this.isOpen;
  }
}
