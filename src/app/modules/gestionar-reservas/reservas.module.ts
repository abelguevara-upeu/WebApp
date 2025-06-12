import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { FormsModule } from '@angular/forms';
import { ReservasRoutingModule } from './reservas-routing.module';
import { ReservasComponent } from './reservas.component';

@NgModule({
  declarations: [
    ReservasComponent
  ],
  imports: [
    CommonModule,
    ReservasRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ]
})

export class ReservasModule { }
