import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  imageUrl: string = ''; // Görsel URL'si

  open(imageUrl: string) {
    this.imageUrl = imageUrl;
    document.getElementById('modal')?.classList.remove('hidden'); // Modal'ı aç
  }

  close() {
    this.imageUrl = ''; // Görseli sıfırla
    document.getElementById('modal')?.classList.add('hidden'); // Modal'ı kapat
  }
}
