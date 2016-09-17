import { Component, AfterViewInit } from '@angular/core';

/**
 * This class represents the lazy loaded LoginComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-login',
  templateUrl: 'login.component.html',
})
export class LoginComponent implements AfterViewInit {
  ngAfterViewInit() {
    $.material.init();
  }
}
