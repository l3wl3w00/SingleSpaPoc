import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { RippleModule } from 'primeng/ripple';
import { DINOSAURS } from './dinos/dinosaurs.data';
import { navigateToUrl } from 'single-spa';

@Component({
  selector: 'dino-list',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, TagModule, RippleModule],
  templateUrl: './dino-list.component.html',
  styleUrls: ['./dino-list.component.scss'],
})
export class DinoListComponent {
  dinos = DINOSAURS;

  onSelect(dino: string): void {
    navigateToUrl(`/dino-details/${encodeURIComponent(dino)}`);
  }

  dietSeverity(diet: string): string {
    switch (diet) {
      case 'Carnivore':
        return 'danger';
      case 'Herbivore':
        return 'success';
      case 'Omnivore':
        return 'warning';
      default:
        return 'info';
    }
  }
}
