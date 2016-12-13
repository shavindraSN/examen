import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { GraphComponent } from './graph.component';
import { ChartsModule } from 'ng2-charts'
@NgModule({
    imports: [ChartsModule, CommonModule],
    declarations: [GraphComponent],
    exports: [GraphComponent],
    providers: []
})
export class GraphModule {}