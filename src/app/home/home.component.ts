import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  modalTitulo = '';
  modalContenido = '';

  abrirModal(titulo: string, contenido: string): void {
    this.modalTitulo = titulo;
    this.modalContenido = contenido;

    const modalElement = document.getElementById('infoModal');
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}
