import { Component, AfterViewInit } from '@angular/core';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-navbar',
  templateUrl: 'navbar.component.html'
})
export class NavbarComponent implements AfterViewInit{
  ngAfterViewInit() {
    $.material.init();
  }
}
