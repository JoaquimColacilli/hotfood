import { Routes } from '@angular/router';
import { HotfoodComponent } from './hotfood/hotfood.component';

export const routes: Routes = [
  { path: '', component: HotfoodComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
