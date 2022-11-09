import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddEmpleadoPageRoutingModule } from './add-empleado-routing.module';

import { AddEmpleadoPage } from './add-empleado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddEmpleadoPageRoutingModule
  ],
  declarations: [AddEmpleadoPage]
})
export class AddEmpleadoPageModule {}
