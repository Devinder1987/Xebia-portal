import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface Address {
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    country: string;
    pinCode: number;
}
@Component({
    moduleId: module.id,
    selector: 'app-address-component',
    templateUrl: 'address-component.html',
    styleUrls: ['./employee.component.css'],
})

export class AddressComponent implements OnInit {
    @Input() addLabel;
    @Input() addID;
    @Input() config;
    @Input() address;
    @Input() isCheckbox;
    @Output() addressUpdated = new EventEmitter<Address>();
    hrefID;
    configProp;
    constructor() {
    }
    ngOnInit() {
        this.hrefID = `#${this.addID}`;
        this.configProp = this.config;
     }
     addressChanged = () => {
         this.addressUpdated.emit(this.address);
     }
}
