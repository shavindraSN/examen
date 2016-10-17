import { Component, AfterViewInit } from '@angular/core';

@Component({
    selector: 'init-model-paper',
    templateUrl: 'client/components/initModelPaper/init-model-paper.component.html'
})
export class InitModelPaperComponent implements AfterViewInit{
    ngAfterViewInit() {
        $.material.init();
    }

    /**
     * This method is to read the database and retrieve available years with model papers
     * This method will communicate with the API and retrieve data from the API
     */
    getAvailableYears(): number[] {
        let availableYears: number[];
        availableYears = [2010, 2011, 2012, 2013, 2014, 2015, 2016];
        return availableYears
    }
}