import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DINO_DETAILS } from './dinos/dino-details.data';
import { DinosaurDetail } from './dinos/dinosaur-detail';

@Component({
  selector: 'dino-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dino-detail.component.html',
  styleUrls: ['./dino-detail.component.scss']
})
export class DinoDetailComponent {
  dino?: DinosaurDetail;

  constructor(private readonly route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      const name = params['name'];
      this.dino = DINO_DETAILS.find(d => d.name === decodeURIComponent(name));
    });
  }
}
