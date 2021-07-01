import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { CountryComponent } from './country/country.component';


@NgModule({
  declarations: [RegistrationComponent, CountryComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule { }
