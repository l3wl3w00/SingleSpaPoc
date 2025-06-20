import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DINOSAURS } from './dinos/dinosaurs.data';

@Component({
  selector: 'dino-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dino-list.component.html',
  styleUrls: ['./dino-list.component.scss'],
})
export class DinoListComponent {
  dinos = DINOSAURS;

  onSelect(dino: string): void {
    window.dispatchEvent(
      new CustomEvent('dino-selected', { detail: dino })
    );
    alert(`Details for ${dino} will open in another app.`);
  }
}
