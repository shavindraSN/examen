import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts'

@Component({
    selector: 'line-chart',
    templateUrl: 'client/components/shared/graph/graph.component.html',
    providers: [BaseChartDirective]
})
export class GraphComponent {
    subjects =  ['Physics', 'Chemistry', 'Biology']
    public lineChartData: Array<any> = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: this.subjects[0] },
        { data: [28, 48, 40, 19, 86, 27, 90], label: this.subjects[1] },
        { data: [18, 48, 77, 50, 100, 27, 40], label: this.subjects[2] }
    ];
    public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartOptions: any = {
        animation: false,
        responsive: true
    };
    public lineChartColors: Array<any> = [
        { // Red
            backgroundColor: 'rgba(255, 99, 132,0.1)',
            borderColor: 'rgba(255, 99, 132,1)',
            pointBackgroundColor: 'rgba(255, 99, 132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255, 99, 132,0.8)'
        },
        { // Green
            backgroundColor: 'rgba(75, 192, 192,0.1)',
            borderColor: 'rgba(75, 192, 192,1)',
            pointBackgroundColor: 'rgba(75, 192, 192,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(75, 192, 192,1)'
        },
        { // Blue
            backgroundColor: 'rgba(54, 162, 235,0.1)',
            borderColor: 'rgba(54, 162, 235,1)',
            pointBackgroundColor: 'rgba(54, 162, 235,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(54, 162, 235,0.8)'
        }
    ];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';

    public randomize(): void {
        let _lineChartData: Array<any> = new Array(this.lineChartData.length);
        for (let i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (let j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    }
    /**
     * Event Handler Chart hover event
     */
    chartHovered($event) { }

    /**
     * Event Handler Chart click event
     */
    chartClicked($event) { }
}