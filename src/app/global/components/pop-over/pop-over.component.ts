import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pop-over',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './pop-over.component.html',
})
export class PopOverComponent {
  @Input() handleUpdate!: () => void;
  @Input() handleDelete!: () => void;
}
