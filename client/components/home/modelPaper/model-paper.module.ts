import { NgModule } from '@angular/core';

import { ModelPaperComponent } from './model-paper.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule],
    declarations: [ModelPaperComponent],
    exports: [ModelPaperComponent]
})
export class ModelPaperModule { }