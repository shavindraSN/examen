import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{ PaperComponent } from './paper.component'

@NgModule({
    imports: [CommonModule],
    declarations: [PaperComponent],
    exports: [PaperComponent]
})
export class PaperModule{ }