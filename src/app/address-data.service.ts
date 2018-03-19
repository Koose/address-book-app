import { InMemoryDbService } from 'angular-in-memory-web-api';

export class AddressDataService implements InMemoryDbService {
    createDb() {
        const addressData = [
            {
                id: 0,
                name: 'Leland Rosenblum',
                address: '111 E Jackson Blvd Ste 300, IL 60604-4136'
            },

            {
                id: 1,
                name: 'Baker Jones',
                address: '1200 Park Ave, Emeryville, CA 94608'
            },

            {
                id: 2,
                name: 'Palmera Fleming',
                address: '75 9th Ave, New York, NY 10011'
            }
        ];
        return {addressData};
    }
}