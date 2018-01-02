import { Component, OnInit, Input } from '@angular/core';


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
   hrefID;
    // addLabel = 'Panna';
    address: Address;
    configProp;
    constructor() {
        this.address = {
            addressLine1: 'string',
            addressLine2: 'string',
            city: 'string',
            state: 'string',
            country: 'India',
            pinCode: 123456
        };
    }

    ngOnInit() {
        this.hrefID = `#${this.addID}`;
        this.configProp = this.config;
     }
}
