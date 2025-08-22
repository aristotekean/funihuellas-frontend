import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <!-- Newsletter Banner -->
    <div
      class="bg-gradient-to-r from-primary to-secondary text-white py-8"
      [class.hidden]="!showNewsletterBanner()"
    >
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center justify-between">
          <div class="text-center lg:text-left mb-6 lg:mb-0">
            <h3 class="text-2xl font-bold mb-2">
              🌟 ¡Mantente Conectado con Nuestra Misión!
            </h3>
            <p class="text-lg opacity-90">
              Recibe actualizaciones sobre nuestros proyectos e impacto en la
              comunidad
            </p>
          </div>
          <div class="flex-shrink-0">
            <form
              class="join"
              (ngSubmit)="subscribeNewsletter()"
              #newsletterForm="ngForm"
            >
              <input
                type="email"
                [(ngModel)]="newsletterEmail"
                name="email"
                placeholder="tu@email.com"
                class="input input-bordered join-item w-64 text-gray-800"
                required
                #emailInput="ngModel"
              />
              <button
                type="submit"
                class="btn btn-accent join-item"
                [disabled]="!emailInput.valid || isSubmittingNewsletter()"
                [class.loading]="isSubmittingNewsletter()"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Footer -->
    <footer class="footer footer-horizontal bg-base-200 text-base-content p-10">
      <!-- Foundation Info -->
      <aside class="flex flex-col items-start">
        <div class="flex items-center space-x-3 mb-4">
          <!-- Logo -->
          <div
            class="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-white"
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
          <div>
            <h2 class="text-2xl font-bold text-primary">FuniHuellas</h2>
            <p class="text-sm text-gray-600">Fundación</p>
          </div>
        </div>

        <p class="text-base-content/80 max-w-sm mb-4">
          Transformando vidas y comunidades a través de programas de educación,
          salud, medio ambiente y desarrollo sostenible.
        </p>

        <!-- Impact Stats -->
        <div
          class="stats stats-vertical lg:stats-horizontal shadow-sm bg-white/50 backdrop-blur-sm"
        >
          <div class="stat py-2 px-4">
            <div class="stat-title text-xs">Personas Impactadas</div>
            <div class="stat-value text-lg text-primary">
              {{ impactStats.peopleHelped() }}
            </div>
          </div>
          <div class="stat py-2 px-4">
            <div class="stat-title text-xs">Proyectos Activos</div>
            <div class="stat-value text-lg text-secondary">
              {{ impactStats.activeProjects() }}
            </div>
          </div>
          <div class="stat py-2 px-4">
            <div class="stat-title text-xs">Años de Servicio</div>
            <div class="stat-value text-lg text-accent">
              {{ impactStats.yearsOfService() }}
            </div>
          </div>
        </div>
      </aside>

      <!-- Programs Navigation -->
      <nav>
        <h6 class="footer-title text-primary">Programas</h6>
        <a
          routerLink="/programs/education"
          class="link link-hover flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
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
          <span>Educación</span>
        </a>
        <a
          routerLink="/programs/health"
          class="link link-hover flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
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
          <span>Salud</span>
        </a>
        <a
          routerLink="/programs/environment"
          class="link link-hover flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
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
          <span>Medio Ambiente</span>
        </a>
        <a
          routerLink="/programs/community"
          class="link link-hover flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
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
          <span>Desarrollo Comunitario</span>
        </a>
      </nav>

      <!-- Organization Navigation -->
      <nav>
        <h6 class="footer-title text-primary">Organización</h6>
        <a routerLink="/about" class="link link-hover">Sobre Nosotros</a>
        <a routerLink="/team" class="link link-hover">Nuestro Equipo</a>
        <a routerLink="/volunteer" class="link link-hover">Voluntariado</a>
        <a routerLink="/careers" class="link link-hover"
          >Trabaja con Nosotros</a
        >
        <a routerLink="/partnerships" class="link link-hover">Alianzas</a>
        <a routerLink="/annual-reports" class="link link-hover"
          >Informes Anuales</a
        >
      </nav>

      <!-- Support & Resources -->
      <nav>
        <h6 class="footer-title text-primary">Apoyo & Recursos</h6>
        <a
          routerLink="/donate"
          class="link link-hover font-semibold text-accent"
          >💝 Donar</a
        >
        <a routerLink="/sponsor" class="link link-hover">Patrocinar</a>
        <a routerLink="/fundraising" class="link link-hover"
          >Recaudación de Fondos</a
        >
        <a routerLink="/impact" class="link link-hover">Nuestro Impacto</a>
        <a routerLink="/news" class="link link-hover">Noticias</a>
        <a routerLink="/events" class="link link-hover">Eventos</a>
        <a routerLink="/resources" class="link link-hover">Recursos</a>
      </nav>

      <!-- Contact & Legal -->
      <nav>
        <h6 class="footer-title text-primary">Contacto & Legal</h6>
        <a routerLink="/contact" class="link link-hover">Contacto</a>
        <a routerLink="/locations" class="link link-hover">Ubicaciones</a>
        <a routerLink="/help" class="link link-hover">Centro de Ayuda</a>
        <div class="divider my-2"></div>
        <a routerLink="/privacy" class="link link-hover text-sm"
          >Política de Privacidad</a
        >
        <a routerLink="/terms" class="link link-hover text-sm"
          >Términos de Uso</a
        >
        <a routerLink="/transparency" class="link link-hover text-sm"
          >Transparencia</a
        >
        <a routerLink="/cookies" class="link link-hover text-sm"
          >Política de Cookies</a
        >
      </nav>
    </footer>

    <!-- Bottom Footer with Social Links -->
    <footer class="footer footer-center bg-primary text-primary-content p-6">
      <div class="container mx-auto">
        <div
          class="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0"
        >
          <!-- Social Media Links -->
          <nav>
            <div class="grid grid-flow-col gap-4">
              <a
                href="https://facebook.com/funihuellas"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-ghost btn-circle hover:bg-white hover:text-primary transition-all duration-300"
                aria-label="Síguenos en Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="fill-current"
                >
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://instagram.com/funihuellas"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-ghost btn-circle hover:bg-white hover:text-primary transition-all duration-300"
                aria-label="Síguenos en Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="fill-current"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com/funihuellas"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-ghost btn-circle hover:bg-white hover:text-primary transition-all duration-300"
                aria-label="Síguenos en Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="fill-current"
                >
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://youtube.com/funihuellas"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-ghost btn-circle hover:bg-white hover:text-primary transition-all duration-300"
                aria-label="Suscríbete a nuestro canal de YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="fill-current"
                >
                  <path
                    d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/funihuellas"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-ghost btn-circle hover:bg-white hover:text-primary transition-all duration-300"
                aria-label="Conéctate con nosotros en LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="fill-current"
                >
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-ghost btn-circle hover:bg-white hover:text-primary transition-all duration-300"
                aria-label="Contáctanos por WhatsApp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  class="fill-current"
                >
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
                  />
                </svg>
              </a>
            </div>
          </nav>

          <!-- Contact Info -->
          <div class="text-center lg:text-left">
            <div
              class="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6 text-sm"
            >
              <div class="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>info@funihuellas.org</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+1 (555) 123-4567</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Ciudad, País</span>
              </div>
            </div>
          </div>

          <!-- Certifications & Trust Badges -->
          <div class="flex items-center space-x-4">
            <div
              class="tooltip"
              data-tip="Organización Certificada sin Fines de Lucro"
            >
              <div class="badge badge-accent badge-lg">501(c)(3)</div>
            </div>
            <div class="tooltip" data-tip="Sello de Transparencia">
              <div class="badge badge-secondary badge-lg">⭐ Transparencia</div>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="mt-6 pt-6 border-t border-primary-content/20 text-center">
          <p class="text-sm opacity-80">
            © {{ currentYear() }} FuniHuellas Fundación. Todos los derechos
            reservados. <span class="hidden lg:inline">|</span
            ><br class="lg:hidden" />
            <span class="font-semibold">RUC: 20123456789</span> •
            <span class="font-semibold"
              >Registro de Fundaciones: FUN-2020-001</span
            >
          </p>
          <p class="text-xs opacity-60 mt-2">
            Hecho con ❤️ para hacer del mundo un lugar mejor
          </p>
        </div>
      </div>
    </footer>

    <!-- Success Toast for Newsletter -->
    <div class="toast toast-top toast-end" [class.hidden]="!showSuccessToast()">
      <div class="alert alert-success">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>¡Te has suscrito exitosamente a nuestro newsletter!</span>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .footer {
        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      }

      .footer-title {
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 1rem;
        position: relative;
      }

      .footer-title::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 30px;
        height: 2px;
        background: linear-gradient(90deg, #3b82f6, #8b5cf6);
        border-radius: 1px;
      }

      .link-hover {
        transition: all 0.2s ease-in-out;
        padding: 0.25rem 0;
        border-radius: 4px;
      }

      .link-hover:hover {
        color: #3b82f6;
        transform: translateX(4px);
        background: rgba(59, 130, 246, 0.1);
        padding-left: 0.5rem;
      }

      .stats {
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }

      .btn-circle:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
      }

      .newsletter-banner {
        background: linear-gradient(
          135deg,
          #3b82f6 0%,
          #8b5cf6 50%,
          #ec4899 100%
        );
        animation: gradient 6s ease infinite;
        background-size: 200% 200%;
      }

      @keyframes gradient {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      .join .input {
        transition: all 0.2s ease-in-out;
      }

      .join .input:focus {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
      }

      .badge {
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .tooltip:before {
        background: rgba(0, 0, 0, 0.9);
        color: white;
        border-radius: 6px;
        padding: 8px 12px;
        font-size: 0.75rem;
      }

      @media (max-width: 768px) {
        .footer {
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .footer > * {
          text-align: center;
        }

        .stats {
          margin: 0 auto;
        }
      }
    `,
  ],
})
export class FooterComponent {
  // Reactive signals for component state
  showNewsletterBanner = signal(true);
  showSuccessToast = signal(false);
  isSubmittingNewsletter = signal(false);

  // Newsletter form data
  newsletterEmail = '';

  // Impact statistics
  impactStats = {
    peopleHelped: signal(15847),
    activeProjects: signal(23),
    yearsOfService: signal(new Date().getFullYear() - 2018),
  };

  // Current year for copyright
  currentYear = signal(new Date().getFullYear());

  constructor() {
    // Update impact stats periodically
    this.startImpactUpdates();
  }

  // Newsletter subscription handler
  async subscribeNewsletter() {
    if (!this.newsletterEmail || this.isSubmittingNewsletter()) return;

    this.isSubmittingNewsletter.set(true);

    try {
      // Simulate API call
      await this.simulateApiCall();

      // Show success message
      this.showSuccessToast.set(true);

      // Clear form
      this.newsletterEmail = '';

      // Hide success toast after 5 seconds
      setTimeout(() => {
        this.showSuccessToast.set(false);
      }, 5000);
    } catch (error) {
      console.error('Newsletter subscription failed:', error);
      // Here you would show an error toast
    } finally {
      this.isSubmittingNewsletter.set(false);
    }
  }

  // Simulate API call for newsletter subscription
  private simulateApiCall(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Newsletter subscription for: ${this.newsletterEmail}`);
        resolve();
      }, 1500);
    });
  }

  // Simulate real-time impact statistics updates
  private startImpactUpdates() {
    setInterval(() => {
      // Randomly update people helped (simulating real impact)
      if (Math.random() < 0.05) {
        // 5% chance every interval
        this.impactStats.peopleHelped.update((count) => count + 1);
      }
    }, 60000); // Check every minute
  }

  // Hide newsletter banner
  hideNewsletterBanner() {
    this.showNewsletterBanner.set(false);
  }
}
