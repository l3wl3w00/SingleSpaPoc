import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DINOSAURS } from './dinos/dinosaurs.data';
import { navigateToUrl } from 'single-spa';

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
    navigateToUrl(`/dino-details/${encodeURIComponent(dino)}`);
  }
}
