import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeAlumnComponent } from './pages/welcome-alumn/welcome-alumn.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    WelcomeAlumnComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    RouterModule
  ]
})
export class WelcomeModule { }
