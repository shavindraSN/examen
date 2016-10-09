import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { ModelPaperModule } from './modelPaper/model-paper.module';
import { TimeModeModule } from './timeMode/time-mode.module';

@NgModule({
  imports: [
    CommonModule, 
    SharedModule, 
    ModelPaperModule,
    TimeModeModule,
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class HomeModule { }
