import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddedQuestionsComponent } from './added-questions.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule, CommonModule],
    declarations: [AddedQuestionsComponent],
    exports: [AddedQuestionsComponent]
})
export class AddQuestionModule { }