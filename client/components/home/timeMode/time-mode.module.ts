import { NgModule } from '@angular/core';

import { TimeModeComponent } from './time-mode.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule],
    declarations: [TimeModeComponent],
    exports: [TimeModeComponent]
})
export class TimeModeModule { }