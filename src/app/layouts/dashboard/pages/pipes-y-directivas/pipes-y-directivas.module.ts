import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesYDirectivasRoutingModule } from './pipes-y-directivas-routing.module';
import { PipesYDirectivasComponent } from './pipes-y-directivas.component';
import { MCustomTextTranformPipe } from './m-custom-text-tranform.pipe';
import { SharedModule } from '../../../../shared/shared.module';



@NgModule({
  declarations: [
    PipesYDirectivasComponent,
    MCustomTextTranformPipe
  ],
  imports: [
    CommonModule,
    PipesYDirectivasRoutingModule, SharedModule
  ],
  exports: [
    PipesYDirectivasComponent
  ]
})
export class PipesYDirectivasModule { }
