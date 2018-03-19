import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Address } from './address';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AddressService {
    private addressesUrl = 'app/addressData'; //URL to web api

    constructor(private http: HttpClient) { }

    getAddresses(): Observable<Address[]> {
        return this.http.get<Address[]>(this.addressesUrl);
    }

    removeAddress(id:number): Observable<Address> {
        const url = `${this.addressesUrl}/${id}`; // DELETE api/addressData/id
        return this.http.delete<Address>(url);
    }

    updateAddress(address: Address): Observable<any> {
        const url = `${this.addressesUrl}/${address.id}`;
        return this.http.put(url, address);
    }
}
