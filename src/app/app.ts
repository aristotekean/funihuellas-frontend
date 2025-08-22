import { Component } from '@angular/core';
import { LayoutComponent } from './core/layout.component';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'FuniHuellas - Transformando Vidas';
}
