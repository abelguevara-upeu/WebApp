import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservasComponent } from './reservas.component';

const routes: Routes = [
  { path: 'gestionar', component: ReservasComponent,
    loadChildren: () => import('./vista/vista.module').then(module => module.VistaModule)
  },
  {
    path: '**',
    redirectTo:'  ' //fixed
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class ReservasRoutingModule {}
