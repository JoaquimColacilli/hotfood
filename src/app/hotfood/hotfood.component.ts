import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hotfood',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotfood.component.html',
  styleUrl: './hotfood.component.css',
})
export class HotfoodComponent {
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
