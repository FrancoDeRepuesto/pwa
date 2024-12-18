import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wide-btn',
  standalone: true,
  imports: [],
  templateUrl: './wide-btn.component.html',
  styleUrl: './wide-btn.component.css',
})
export class WideBtnComponent {
  @Input() icon1 = 'settings';
  @Input() icon2 = 'chevron_right';
  @Input() action = 'Action'
}
