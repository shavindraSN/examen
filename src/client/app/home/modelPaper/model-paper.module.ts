import { NgModule } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';
import { ModelPaperComponent } from './model-paper.component';

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    declarations: [ModelPaperComponent],
    exports: [ModelPaperComponent]
})
export class ModelPaperModule{ }