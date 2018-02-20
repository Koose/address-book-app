import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { ADDRESSES } from '../address-data';

@Component({
    selector: 'app-address-book',
    templateUrl: './address-book.component.html',
    styleUrls: ['./address-book.component.css']
})
export class AddressBookComponent implements OnInit {
    user:string;
    default: Address;
    all: Address[];

    constructor() { }

    ngOnInit() {
        this.user = 'Jane Doe';
        this.all = ADDRESSES;
        if (this.all.length > 0) {
            this.default = this.all[0];
        }
    }

    onRemove(item) {
        this.all = this.all.filter( a => a != item);
    }
}
