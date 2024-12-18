import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-generic-btn',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './generic-btn.component.html',
  styleUrl: './generic-btn.component.css',
})
export class GenericBtnComponent {
  @Input() icon: string = 'close';
  @Input() showTxt: boolean = true;
  @Input() destination: string | null = null;
  @Input() notifications: number = 0;
  @Input() enfasis: boolean = false;
  @Input() rounded: boolean = false;
  @Input() wfull: boolean = false;
}
