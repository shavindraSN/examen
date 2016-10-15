import { Component, AfterViewInit } from '@angular/core';

@Component({
    selector: 'navbar',
    templateUrl: 'client/components/shared/navbar/navbar.component.html'
})
export class NavBarComponent implements AfterViewInit{
    ngAfterViewInit(){
        $.material.init()
    }
}