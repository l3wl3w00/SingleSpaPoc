import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { DINOSAURS, Dinosaur } from '../../../common';

@Component({
  selector: 'dino-detail',
  standalone: true,
  imports: [CommonModule, CardModule, TagModule, DividerModule],
  templateUrl: './dino-detail.component.html',
  styleUrls: ['./dino-detail.component.scss']
})
export class DinoDetailComponent {
  dino?: Dinosaur;

  constructor(private readonly route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const name = params['name'];
      this.dino = DINOSAURS.find(d => d.name === decodeURIComponent(name));
    });
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
