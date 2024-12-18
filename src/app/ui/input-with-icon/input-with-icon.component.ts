import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-with-icon',
  standalone: true,
  imports: [],
  templateUrl: './input-with-icon.component.html',
  styleUrl: './input-with-icon.component.css'
})
export class InputWithIconComponent {
  @Input() icon = 'search'
  @Input() placeHolder = 'search'
}
