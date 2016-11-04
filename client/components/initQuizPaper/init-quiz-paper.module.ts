import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { InitQuizPaperComponent } from './init-quiz-paper.component';
import { PaperComponent } from '../paper/paper.component'

NgModule({
    imports: [HttpModule],
    declarations: [ InitQuizPaperComponent,PaperComponent ],
    exports: [ InitQuizPaperComponent ]
})
export class InitQuizPaperModule { }