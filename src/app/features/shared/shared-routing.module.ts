import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedComponent } from './shared.component';

const routes: Routes = [
  {
    path: '',
    component: SharedComponent,
    children: [
      {
        path: 'registration',
        loadChildren: () => import('../registration/registration.module').then(m => m.RegistrationModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
