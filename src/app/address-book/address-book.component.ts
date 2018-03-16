import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { AddressService } from '../address.service';

@Component({
    selector: 'app-address-book',
    templateUrl: './address-book.component.html',
    styleUrls: ['./address-book.component.css']
})
export class AddressBookComponent implements OnInit {
    user:string;
    default: Address;
    all: Address[];
    selected: Address;

    constructor(private addressService: AddressService) { }

    ngOnInit() {
        this.user = 'James Bond';
        this.getAddresses();
        this.getDefaultAddress();
    }

    onRemove(item) {
        this.addressService.removeAddress(item.id).subscribe();
        this.getAddresses();
        this.getDefaultAddress();
    }

    onEdit(item) {
        this.selected = item;
    }

    onUpdate($event) {
        this.selected = null;
        this.addressService.updateAddress($event.address).subscribe();
        // only when default address is affected
        this.getDefaultAddress();
    }

    getAddresses(): void {
        this.addressService.getAddresses().subscribe(addresses => this.all = addresses);
    }

    getDefaultAddress(): void {
        this.addressService.getAddresses().subscribe(addresses => {
            if(addresses.length > 0) {
                this.default = addresses[0];
            }
            else {
                this.default = null;
            }
        });
    }
}
