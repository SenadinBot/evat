import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryComponent } from './country/country.component';

import { RegistrationComponent } from './registration.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent
  },
  {
    path: 'country',
    component: CountryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
