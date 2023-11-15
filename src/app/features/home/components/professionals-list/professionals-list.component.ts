import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-professionals-list',
  templateUrl: './professionals-list.component.html',
  styleUrls: ['./professionals-list.component.css'],
})
export class ProfessionalsListComponent {
  @Input() professionals: string[] = [];
}
