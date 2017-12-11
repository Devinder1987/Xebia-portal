import { Component } from '@angular/core';
import { ModalService } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ModalService]
})
export class AppComponent {
  title = 'app';
  constructor(private modal: ModalService) {
  }
  openModal() {
    this.modal.hideModal = false;
  }
  closeModal(isOpen: boolean) {
    this.modal.hideModal = true;
  }
}
