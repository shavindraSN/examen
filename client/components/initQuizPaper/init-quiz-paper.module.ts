import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { InitQuizPaperComponent } from './init-quiz-paper.component';

NgModule({
    imports: [HttpModule],
    declarations: [ InitQuizPaperComponent ],
    exports: [ InitQuizPaperComponent ]
})
export class InitQuizPaperModule { }