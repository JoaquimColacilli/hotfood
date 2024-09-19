import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hotfood',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotfood.component.html',
  styleUrls: ['./hotfood.component.css'],
})
export class HotfoodComponent implements OnInit {
  isMenuOpen = false;
  currentIndex = 0;
  totalImages = 3;
  isCarousel = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Método para mostrar la imagen correspondiente en modo carrusel
  showImage(index: number): void {
    this.currentIndex = index;
    const offset = -index * 100;
    const images = document.querySelectorAll<HTMLElement>('.hero-image');

    // Verifica que haya suficientes imágenes antes de aplicar el desplazamiento
    if (images.length !== this.totalImages) {
      console.error(
        `Número de imágenes incorrecto. Se esperaban ${this.totalImages}, pero se encontraron ${images.length}`
      );
      return;
    }

    // Aplica el desplazamiento a todas las imágenes en modo carrusel
    images.forEach((image) => {
      image.style.transform = `translateX(${offset}%)`;
      image.style.transition = 'transform 0.5s ease-in-out'; // Transición suave
    });

    console.log(`Mostrando imagen ${index} con offset: ${offset}%`);
  }

  // Método para manejar el clic en los botones de navegación
  navigate(direction: 'prev' | 'next'): void {
    if (direction === 'prev') {
      this.currentIndex =
        this.currentIndex > 0 ? this.currentIndex - 1 : this.totalImages - 1;
    } else if (direction === 'next') {
      this.currentIndex =
        this.currentIndex < this.totalImages - 1 ? this.currentIndex + 1 : 0;
    }
    this.showImage(this.currentIndex);
  }

  // Método para restablecer la posición de las imágenes cuando se sale del modo carrusel
  resetImagesPosition(): void {
    const images = document.querySelectorAll<HTMLElement>('.hero-image');

    // Restablece la posición de cada imagen al estado inicial
    images.forEach((image) => {
      image.style.transform = `translateX(0%)`;
      image.style.transition = 'transform 0.5s ease-in-out';
    });
  }

  // Listener para detectar el cambio de tamaño de pantalla
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isCarousel = window.innerWidth <= 880;

    // Si se sale del modo carrusel, restablece las posiciones de las imágenes
    if (!this.isCarousel) {
      this.resetImagesPosition();
    }
  }

  // Inicializar la vista de la primera imagen
  ngOnInit() {
    this.isCarousel = window.innerWidth <= 880; // Verifica el tamaño inicial de la pantalla
    this.currentIndex = 0; // Asegura que el índice inicial sea 0
    this.showImage(this.currentIndex); // Muestra la primera imagen al cargar
  }
}
