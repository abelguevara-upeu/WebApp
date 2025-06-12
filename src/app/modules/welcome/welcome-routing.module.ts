import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeAlumnComponent } from './pages/welcome-alumn/welcome-alumn.component';

const routes: Routes = [
  {
    path:'',
    component: WelcomeAlumnComponent,
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
