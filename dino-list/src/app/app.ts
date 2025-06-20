import { Component } from '@angular/core';
import { DinoListComponent } from './dino-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DinoListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {}
