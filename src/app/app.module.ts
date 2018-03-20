import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddressBookComponent } from './address-book/address-book.component';
import { AddressDetailComponent } from './address-detail/address-detail.component';

// import { AddressDataService } from './address-data.service';

@NgModule({
  declarations: [
    AppComponent,
    AddressBookComponent,
    AddressDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    //HttpClientModule
    //HttpClientInMemoryWebApiModule.forRoot(
	// 	AddressDataService, { dataEncapsulation: false }
	// )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
