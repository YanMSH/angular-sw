import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-page-button',
  templateUrl: './page-button.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class PageButtonComponent {
  @Input() clickAction: () => void;
  @Input() innerText: string;
  @Input() disabled: boolean;
}
