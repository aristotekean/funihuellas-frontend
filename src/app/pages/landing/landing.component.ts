import { Component, signal, OnInit, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing',
  imports: [RouterModule, FormsModule],
  templateUrl: './landing.component.html',
})
export class LandingComponent implements OnInit {
  // Información oficial de FUNIHUELLAS
  organizationInfo = {
    name: 'Fundación Niños Dejando Huellas - FUNIHUELLAS',
    nit: '901.020.326',
    matricula: 'SO500897',
    registrationDate: '10 de octubre de 2016',
    registrationNumber: '00006184',
    chamberOfCommerce: 'Cámara de Comercio del Piedemonte Araucano',
    tagline: 'El poder del hombre está en los niños',
  };

  // Reactive signals for component state - Datos actualizados FUNIHUELLAS
  impactStats = {
    peopleHelped: signal(12500), // Niños, niñas y adolescentes atendidos
    activeProjects: signal(18), // Proyectos activos en desarrollo
    volunteers: signal(285), // Voluntarios comprometidos
  };

  isSubscribing = signal(false);
  newsletterEmail = '';

  ngOnInit() {
    // No animations to initialize or start counters without the visual effects
  }

  // Smooth scroll to section
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  // Newsletter subscription
  async subscribeNewsletter() {
    if (!this.newsletterEmail || this.isSubscribing()) return;

    this.isSubscribing.set(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Show success message (you can implement a toast notification)
      alert(
        '¡Gracias por suscribirte! Pronto recibirás noticias sobre nuestro impacto.'
      );

      // Clear form
      this.newsletterEmail = '';
    } catch (error) {
      console.error('Newsletter subscription failed:', error);
      alert(
        'Hubo un error al procesar tu suscripción. Por favor, inténtalo de nuevo.'
      );
    } finally {
      this.isSubscribing.set(false);
    }
  }
}
