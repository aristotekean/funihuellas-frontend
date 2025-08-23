import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestimonialsComponent } from '../../shared/components/testimonials/testimonials';

@Component({
  selector: 'app-landing',
  imports: [RouterModule, TestimonialsComponent],
  templateUrl: './landing.component.html',
})
export class LandingComponent {}
