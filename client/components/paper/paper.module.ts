import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { PaperComponent } from './paper.component';

@NgModule({
    imports: [HttpModule],
    declarations: [PaperComponent],
    exports: [PaperComponent]
})
export class PaperModule { }