import { Component, AfterViewInit } from '@angular/core';

/**
 * This class represents the lazy loaded HistoryComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-history',
  templateUrl: 'history.component.html'
})
export class HistoryComponent implements AfterViewInit{ 
  // Initialize material design ripple effect for this component
    ngAfterViewInit() {
    $.material.init();
  }
}
