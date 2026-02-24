import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FurnitureTransportationComponent } from '../app/components/furniture-transportation.component/furniture-transportation.component.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FurnitureTransportationComponent],
  template: `<app-furniture-transportation></app-furniture-transportation>`
})
export class AppComponent {
  title = 'furniture-transportation-angular';
}
