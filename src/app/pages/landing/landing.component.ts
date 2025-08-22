import { Component, signal, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <!-- Hero Section -->
    <section
      class="hero min-h-screen bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 relative overflow-hidden"
    >
      <!-- Background Elements -->
      <div class="absolute inset-0 bg-base-100/80 backdrop-blur-sm"></div>
      <div
        class="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"
      ></div>
      <div
        class="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse"
      ></div>

      <div
        class="hero-content text-center relative z-10 max-w-6xl mx-auto px-4"
      >
        <div class="max-w-4xl">
          <!-- Badge -->
          <div class="badge badge-primary badge-lg mb-6 animate-bounce">
            ✨ Transformando vidas desde 2018
          </div>

          <!-- Main Title -->
          <h1
            class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight"
          >
            Juntos Construimos un Futuro Mejor
          </h1>

          <!-- Subtitle -->
          <p
            class="text-lg md:text-xl lg:text-2xl mb-8 text-base-content/80 max-w-3xl mx-auto leading-relaxed"
          >
            En FuniHuellas creemos que cada pequeña acción puede generar un gran
            impacto. Únete a nuestra misión de transformar comunidades a través
            de la educación, salud, medio ambiente y desarrollo sostenible.
          </p>

          <!-- Impact Stats -->
          <div
            class="stats stats-vertical lg:stats-horizontal shadow-lg mb-8 bg-white/80 backdrop-blur-sm"
          >
            <div class="stat place-items-center">
              <div class="stat-title text-primary font-semibold">
                Personas Impactadas
              </div>
              <div class="stat-value text-2xl lg:text-3xl text-primary">
                {{ impactStats.peopleHelped() }}
              </div>
              <div class="stat-desc">En los últimos 5 años</div>
            </div>
            <div class="stat place-items-center">
              <div class="stat-title text-secondary font-semibold">
                Proyectos Activos
              </div>
              <div class="stat-value text-2xl lg:text-3xl text-secondary">
                {{ impactStats.activeProjects() }}
              </div>
              <div class="stat-desc">Actualmente en desarrollo</div>
            </div>
            <div class="stat place-items-center">
              <div class="stat-title text-accent font-semibold">
                Voluntarios
              </div>
              <div class="stat-value text-2xl lg:text-3xl text-accent">
                {{ impactStats.volunteers() }}
              </div>
              <div class="stat-desc">Comprometidos con la causa</div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div
            class="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              class="btn btn-primary btn-lg px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              (click)="scrollToSection('programs')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Conoce Nuestros Programas
            </button>
            <button
              class="btn btn-outline btn-secondary btn-lg px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              routerLink="/volunteer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Únete como Voluntario
            </button>
          </div>

          <!-- Scroll Indicator -->
          <div
            class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Programs Section -->
    <section id="programs" class="py-20 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-base-content">
            Nuestros Programas de Impacto
          </h2>
          <p class="text-lg text-base-content/70 max-w-3xl mx-auto">
            Desarrollamos iniciativas integrales que abordan las necesidades más
            urgentes de nuestras comunidades
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Education Program -->
          <div
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
          >
            <figure class="px-6 pt-6">
              <div
                class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
            </figure>
            <div class="card-body text-center">
              <h3 class="card-title justify-center text-lg">Educación</h3>
              <p class="text-sm text-base-content/70">
                Becas educativas y programas de alfabetización para niños y
                adultos
              </p>
              <div class="card-actions justify-center mt-4">
                <button
                  class="btn btn-sm btn-primary btn-outline"
                  routerLink="/programs/education"
                >
                  Ver más
                </button>
              </div>
            </div>
          </div>

          <!-- Health Program -->
          <div
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
          >
            <figure class="px-6 pt-6">
              <div
                class="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
            </figure>
            <div class="card-body text-center">
              <h3 class="card-title justify-center text-lg">Salud</h3>
              <p class="text-sm text-base-content/70">
                Atención médica gratuita y campañas de prevención comunitaria
              </p>
              <div class="card-actions justify-center mt-4">
                <button
                  class="btn btn-sm btn-primary btn-outline"
                  routerLink="/programs/health"
                >
                  Ver más
                </button>
              </div>
            </div>
          </div>

          <!-- Environment Program -->
          <div
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
          >
            <figure class="px-6 pt-6">
              <div
                class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
            </figure>
            <div class="card-body text-center">
              <h3 class="card-title justify-center text-lg">Medio Ambiente</h3>
              <p class="text-sm text-base-content/70">
                Reforestación, reciclaje y educación ambiental sostenible
              </p>
              <div class="card-actions justify-center mt-4">
                <button
                  class="btn btn-sm btn-primary btn-outline"
                  routerLink="/programs/environment"
                >
                  Ver más
                </button>
              </div>
            </div>
          </div>

          <!-- Community Program -->
          <div
            class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
          >
            <figure class="px-6 pt-6">
              <div
                class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </figure>
            <div class="card-body text-center">
              <h3 class="card-title justify-center text-lg">
                Desarrollo Comunitario
              </h3>
              <p class="text-sm text-base-content/70">
                Microcréditos, capacitación laboral y emprendimiento social
              </p>
              <div class="card-actions justify-center mt-4">
                <button
                  class="btn btn-sm btn-primary btn-outline"
                  routerLink="/programs/community"
                >
                  Ver más
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Stories Section -->
    <section class="py-20 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4 text-base-content">
            Historias de Impacto Real
          </h2>
          <p class="text-lg text-base-content/70 max-w-3xl mx-auto">
            Cada historia es una vida transformada, cada sonrisa es nuestro
            mayor logro
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Story 1 -->
          <div class="card bg-base-200 shadow-xl">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=250&fit=crop&crop=faces"
                alt="María estudiando"
                class="w-full h-48 object-cover"
              />
            </figure>
            <div class="card-body">
              <div class="flex items-center mb-4">
                <div class="avatar">
                  <div class="w-12 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=100&h=100&fit=crop&crop=faces"
                      alt="María"
                    />
                  </div>
                </div>
                <div class="ml-3">
                  <h3 class="font-semibold">María González</h3>
                  <p class="text-sm text-base-content/70">
                    Estudiante de Enfermería
                  </p>
                </div>
              </div>
              <p class="text-base-content/80 mb-4">
                "Gracias a la beca educativa de FuniHuellas, pude completar mis
                estudios de enfermería. Ahora trabajo en el hospital de mi
                comunidad ayudando a otras familias."
              </p>
              <div class="badge badge-primary badge-outline">Educación</div>
            </div>
          </div>

          <!-- Story 2 -->
          <div class="card bg-base-200 shadow-xl">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop&crop=faces"
                alt="Carlos con su negocio"
                class="w-full h-48 object-cover"
              />
            </figure>
            <div class="card-body">
              <div class="flex items-center mb-4">
                <div class="avatar">
                  <div class="w-12 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=100&h=100&fit=crop&crop=faces"
                      alt="Carlos"
                    />
                  </div>
                </div>
                <div class="ml-3">
                  <h3 class="font-semibold">Carlos Ramírez</h3>
                  <p class="text-sm text-base-content/70">Emprendedor Local</p>
                </div>
              </div>
              <p class="text-base-content/80 mb-4">
                "El microcrédito me permitió iniciar mi panadería. Ahora empleo
                a 8 personas de mi barrio y mi familia tiene una vida digna."
              </p>
              <div class="badge badge-secondary badge-outline">
                Desarrollo Comunitario
              </div>
            </div>
          </div>

          <!-- Story 3 -->
          <div class="card bg-base-200 shadow-xl">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=250&fit=crop&crop=faces"
                alt="Ana con plantas"
                class="w-full h-48 object-cover"
              />
            </figure>
            <div class="card-body">
              <div class="flex items-center mb-4">
                <div class="avatar">
                  <div class="w-12 rounded-full">
                    <img
                      src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=100&h=100&fit=crop&crop=faces"
                      alt="Ana"
                    />
                  </div>
                </div>
                <div class="ml-3">
                  <h3 class="font-semibold">Ana López</h3>
                  <p class="text-sm text-base-content/70">Líder Ambiental</p>
                </div>
              </div>
              <p class="text-base-content/80 mb-4">
                "Participé en el programa de reforestación y ahora lidero el
                comité ambiental de mi comunidad. Hemos plantado más de 500
                árboles."
              </p>
              <div class="badge badge-accent badge-outline">Medio Ambiente</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section
      class="py-20 bg-gradient-to-r from-primary to-secondary text-primary-content"
    >
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          ¿Listo para Hacer la Diferencia?
        </h2>
        <p class="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Tu apoyo puede transformar vidas. Únete a nuestra misión y sé parte
          del cambio que el mundo necesita.
        </p>

        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            class="btn btn-accent btn-lg px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            routerLink="/donate"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              />
            </svg>
            Donar Ahora
          </button>
          <button
            class="btn btn-outline btn-primary-content btn-lg px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            routerLink="/volunteer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Ser Voluntario
          </button>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
          <h3 class="text-2xl md:text-3xl font-bold mb-4 text-base-content">
            Mantente Conectado
          </h3>
          <p class="text-base-content/70 mb-8">
            Recibe noticias sobre nuestros proyectos, historias de impacto y
            formas de participar
          </p>

          <div class="join w-full max-w-md mx-auto">
            <input
              class="input input-bordered join-item flex-1"
              placeholder="tu@email.com"
              [(ngModel)]="newsletterEmail"
              type="email"
            />
            <button
              class="btn btn-primary join-item"
              (click)="subscribeNewsletter()"
              [class.loading]="isSubscribing()"
            >
              Suscribirse
            </button>
          </div>

          <p class="text-xs text-base-content/50 mt-4">
            Al suscribirte, aceptas recibir correos electrónicos de FuniHuellas.
            Puedes cancelar tu suscripción en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      /* Smooth scrolling */
      html {
        scroll-behavior: smooth;
      }

      /* Hero animations */
      .hero {
        position: relative;
        overflow: hidden;
      }

      .hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          135deg,
          transparent 0%,
          rgba(59, 130, 246, 0.1) 50%,
          transparent 100%
        );
        animation: shimmer 8s ease-in-out infinite;
      }

      @keyframes shimmer {
        0%,
        100% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
      }

      /* Card hover effects */
      .card:hover {
        transform: translateY(-8px);
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      }

      /* Button hover effects */
      .btn:hover {
        transform: translateY(-2px);
      }

      /* Stats animation */
      .stats {
        animation: fadeInUp 1s ease-out;
      }

      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Gradient text */
      .bg-gradient-to-r.bg-clip-text {
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      /* Responsive text scaling */
      @media (max-width: 768px) {
        .hero-content h1 {
          font-size: 2.5rem;
          line-height: 1.1;
        }

        .hero-content p {
          font-size: 1.1rem;
        }
      }

      /* Loading animation */
      .loading {
        animation: spin 1s linear infinite;
      }

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      /* Intersection observer animations */
      .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease-out;
      }

      .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
      }

      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }

      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      ::-webkit-scrollbar-thumb {
        background: #3b82f6;
        border-radius: 4px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: #2563eb;
      }

      /* Focus styles for accessibility */
      .btn:focus,
      .input:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }

      /* High contrast mode support */
      @media (prefers-contrast: high) {
        .card {
          border: 2px solid;
        }

        .btn {
          border-width: 2px;
        }
      }

      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `,
  ],
})
export class LandingComponent implements OnInit {
  // Reactive signals for component state
  impactStats = {
    peopleHelped: signal(15847),
    activeProjects: signal(23),
    volunteers: signal(342),
  };

  isSubscribing = signal(false);
  newsletterEmail = '';

  ngOnInit() {
    // Initialize animations and interactions
    this.initializeAnimations();
    this.startCounterAnimations();
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

  // Initialize scroll animations
  private initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all cards and sections
    setTimeout(() => {
      const elements = document.querySelectorAll(
        '.card, .stats, section > div'
      );
      elements.forEach((el) => {
        el.classList.add('fade-in');
        observer.observe(el);
      });
    }, 100);
  }

  // Animate counters
  private startCounterAnimations() {
    // Animate impact statistics with realistic increments
    setInterval(() => {
      // Randomly update people helped (simulating real impact)
      if (Math.random() < 0.1) {
        // 10% chance every interval
        const currentCount = this.impactStats.peopleHelped();
        this.impactStats.peopleHelped.set(
          currentCount + Math.floor(Math.random() * 3) + 1
        );
      }

      // Occasionally update volunteers
      if (Math.random() < 0.05) {
        // 5% chance every interval
        const currentVolunteers = this.impactStats.volunteers();
        this.impactStats.volunteers.set(currentVolunteers + 1);
      }
    }, 30000); // Check every 30 seconds
  }

  // Handle scroll events for parallax effects
  @HostListener('window:scroll')
  onScroll() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero') as HTMLElement;

    if (parallax) {
      const speed = scrolled * 0.5;
      parallax.style.transform = `translateY(${speed}px)`;
    }
  }

  // Handle resize events
  @HostListener('window:resize')
  onResize() {
    // Recalculate animations or layouts if needed
    this.initializeAnimations();
  }
}
