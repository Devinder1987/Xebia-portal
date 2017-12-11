import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
  modalHeader = 'Header';
  modalBody = 'Body';
  hideModal = true;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  providers: [ModalService]
})
export class ModalComponent implements OnInit {
  @Input() modalHeader = this.modal.modalHeader;
  @Input() modalBody = this.modal.modalBody;
  @Output() closeModal = new EventEmitter<boolean>();
  constructor(private modal: ModalService) {
  }
  ngOnInit() {
  }
  close() {
    this.closeModal.emit(true);
  }
}


