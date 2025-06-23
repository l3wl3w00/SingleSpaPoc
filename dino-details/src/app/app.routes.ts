import { Routes } from '@angular/router';
import { DinoDetailComponent } from './dino-detail.component';
import { DinoHomeComponent } from './dino-home.component';

export const routes: Routes = [
  { path: '', component: DinoHomeComponent, pathMatch: 'full' },
  { path: ':name', component: DinoDetailComponent }
];
