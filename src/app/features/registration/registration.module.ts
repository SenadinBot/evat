import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { CountryComponent } from './country/country.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [RegistrationComponent, CountryComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    FontAwesomeModule
  ]
})
export class RegistrationModule { }
