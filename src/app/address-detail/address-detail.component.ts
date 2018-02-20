import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Address } from '../address';

@Component({
    selector: 'app-address-detail',
    templateUrl: './address-detail.component.html',
    styleUrls: ['./address-detail.component.css']
})
export class AddressDetailComponent implements OnInit {
    @Input() address:Address;
    @Output() addressSaved = new EventEmitter<void>();

    constructor() { }

    ngOnInit() {
    }

    onSave() {
        this.addressSaved.emit();
    }
}
