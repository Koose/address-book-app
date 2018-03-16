import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AddressService } from './address.service';
import { AddressDataService } from './address-data.service';

import { AppComponent } from './app.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { AddressDetailComponent } from './address-detail/address-detail.component';


@NgModule({
    declarations: [
        AppComponent,
        AddressBookComponent,
        AddressDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            AddressDataService, { dataEncapsulation: false, delay: 50}
        )
    ],
    providers: [AddressService],
    bootstrap: [AppComponent]
})
export class AppModule { }
