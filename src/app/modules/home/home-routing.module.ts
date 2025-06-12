import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
{
  path:'',
  component: HomeComponent,
  children: [
    {
        path: 'welcome',
        loadChildren: () => import('../welcome/welcome.module').then(m => m.WelcomeModule)
      },
      {
        path: 'reservas',
        loadChildren: () => import('../gestionar-reservas/reservas.module').then(m => m.ReservasModule),
      },
      {
        path:'**',
        redirectTo:'welcome'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
