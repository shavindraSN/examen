import { Component, AfterViewInit } from '@angular/core';

/**
 * This class represents the lazy loaded RegistrationComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-registration',
  templateUrl: 'registration.component.html'
})
export class RegistrationComponent implements AfterViewInit {
  ngAfterViewInit() {
    $.material.init();
  }
}