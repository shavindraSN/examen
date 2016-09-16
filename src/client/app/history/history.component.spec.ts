import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { HistoryModule } from './history.module';

export function main() {
   describe('History component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [HistoryModule]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let historyDOMEl = fixture.debugElement.children[0].nativeElement;

	          expect(historyDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Features');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-history></sd-history>'
})
class TestComponent {}
