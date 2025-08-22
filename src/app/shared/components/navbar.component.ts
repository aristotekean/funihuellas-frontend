import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  template: `
    <!-- Main Navigation Bar -->
    <div
      class="navbar bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50"
    >
      <!-- Mobile Menu Button & Logo -->
      <div class="navbar-start">
        <!-- Mobile hamburger menu -->
        <div class="dropdown lg:hidden">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost btn-circle"
            aria-label="Open mobile menu"
            (click)="toggleMobileMenu()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-64 p-4 shadow-xl border border-gray-100"
            [class.hidden]="!isMobileMenuOpen()"
          >
            <li>
              <a
                routerLink="/"
                class="text-lg py-3 hover:bg-primary hover:text-white rounded-lg transition-colors"
                >Inicio</a
              >
            </li>
            <li>
              <a
                routerLink="/about"
                class="text-lg py-3 hover:bg-primary hover:text-white rounded-lg transition-colors"
                >Nosotros</a
              >
            </li>
            <li>
              <details>
                <summary
                  class="text-lg py-3 hover:bg-primary hover:text-white rounded-lg transition-colors"
                >
                  Programas
                </summary>
                <ul class="bg-base-100 rounded-t-none p-2 ml-4">
                  <li>
                    <a
                      routerLink="/programs/education"
                      class="py-2 hover:bg-primary hover:text-white rounded transition-colors"
                      >Educación</a
                    >
                  </li>
                  <li>
                    <a
                      routerLink="/programs/health"
                      class="py-2 hover:bg-primary hover:text-white rounded transition-colors"
                      >Salud</a
                    >
                  </li>
                  <li>
                    <a
                      routerLink="/programs/environment"
                      class="py-2 hover:bg-primary hover:text-white rounded transition-colors"
                      >Medio Ambiente</a
                    >
                  </li>
                  <li>
                    <a
                      routerLink="/programs/community"
                      class="py-2 hover:bg-primary hover:text-white rounded transition-colors"
                      >Desarrollo Comunitario</a
                    >
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a
                routerLink="/impact"
                class="text-lg py-3 hover:bg-primary hover:text-white rounded-lg transition-colors"
                >Impacto</a
              >
            </li>
            <li>
              <a
                routerLink="/volunteer"
                class="text-lg py-3 hover:bg-primary hover:text-white rounded-lg transition-colors"
                >Voluntariado</a
              >
            </li>
            <li>
              <a
                routerLink="/news"
                class="text-lg py-3 hover:bg-primary hover:text-white rounded-lg transition-colors"
                >Noticias</a
              >
            </li>
            <li>
              <a
                routerLink="/contact"
                class="text-lg py-3 hover:bg-primary hover:text-white rounded-lg transition-colors"
                >Contacto</a
              >
            </li>

            <!-- Mobile CTA Buttons -->
            <div class="divider my-4"></div>
            <li>
              <button
                class="btn btn-outline btn-primary btn-block mb-2"
                (click)="openVolunteerForm()"
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Ser Voluntario
              </button>
            </li>
            <li>
              <button
                class="btn btn-primary btn-block"
                (click)="openDonationForm()"
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Donar Ahora
              </button>
            </li>
          </ul>
        </div>

        <!-- Logo and Foundation Name -->
        <div class="flex items-center">
          <a
            routerLink="/"
            class="btn btn-ghost text-xl lg:text-2xl font-bold text-primary hover:bg-transparent"
          >
            <div class="flex items-center space-x-3">
              <!-- Logo placeholder - replace with actual logo -->
              <div
                class="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 lg:h-7 lg:w-7 text-white"
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
              <div class="hidden sm:block">
                <span class="text-primary font-bold">FuniHuellas</span>
                <div class="text-xs text-gray-600 font-normal -mt-1">
                  Fundación
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <!-- Desktop Navigation Menu -->
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 space-x-2">
          <li>
            <a
              routerLink="/"
              routerLinkActive="bg-primary text-white"
              [routerLinkActiveOptions]="{ exact: true }"
              class="hover:bg-primary hover:text-white transition-colors rounded-lg"
              >Inicio</a
            >
          </li>
          <li>
            <a
              routerLink="/about"
              routerLinkActive="bg-primary text-white"
              class="hover:bg-primary hover:text-white transition-colors rounded-lg"
              >Nosotros</a
            >
          </li>
          <li>
            <details>
              <summary
                class="hover:bg-primary hover:text-white transition-colors rounded-lg"
              >
                Programas
              </summary>
              <ul
                class="bg-white rounded-box z-[1] w-64 p-2 shadow-xl border border-gray-100"
              >
                <li>
                  <a
                    routerLink="/programs/education"
                    class="hover:bg-primary hover:text-white transition-colors rounded"
                    >Educación</a
                  >
                </li>
                <li>
                  <a
                    routerLink="/programs/health"
                    class="hover:bg-primary hover:text-white transition-colors rounded"
                    >Salud</a
                  >
                </li>
                <li>
                  <a
                    routerLink="/programs/environment"
                    class="hover:bg-primary hover:text-white transition-colors rounded"
                    >Medio Ambiente</a
                  >
                </li>
                <li>
                  <a
                    routerLink="/programs/community"
                    class="hover:bg-primary hover:text-white transition-colors rounded"
                    >Desarrollo Comunitario</a
                  >
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a
              routerLink="/impact"
              routerLinkActive="bg-primary text-white"
              class="hover:bg-primary hover:text-white transition-colors rounded-lg"
              >Impacto</a
            >
          </li>
          <li>
            <a
              routerLink="/volunteer"
              routerLinkActive="bg-primary text-white"
              class="hover:bg-primary hover:text-white transition-colors rounded-lg"
              >Voluntariado</a
            >
          </li>
          <li>
            <a
              routerLink="/news"
              routerLinkActive="bg-primary text-white"
              class="hover:bg-primary hover:text-white transition-colors rounded-lg"
              >Noticias</a
            >
          </li>
          <li>
            <a
              routerLink="/contact"
              routerLinkActive="bg-primary text-white"
              class="hover:bg-primary hover:text-white transition-colors rounded-lg"
              >Contacto</a
            >
          </li>
        </ul>
      </div>

      <!-- Right Side Actions -->
      <div class="navbar-end">
        <div class="hidden lg:flex items-center space-x-3">
          <!-- Impact Counter -->
          <div
            class="stats stats-horizontal bg-base-100 shadow-sm border border-gray-100"
          >
            <div class="stat py-2 px-4">
              <div class="stat-title text-xs">Vidas Impactadas</div>
              <div class="stat-value text-lg text-primary">
                {{ impactCounter() }}
              </div>
            </div>
          </div>

          <!-- Language Selector -->
          <div class="dropdown dropdown-end">
            <div
              tabindex="0"
              role="button"
              class="btn btn-ghost btn-circle"
              aria-label="Select language"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="dropdown-content menu bg-white rounded-box z-[1] w-32 p-2 shadow-xl border border-gray-100"
            >
              <li>
                <a
                  (click)="changeLanguage('es')"
                  class="hover:bg-primary hover:text-white"
                  >🇪🇸 Español</a
                >
              </li>
              <li>
                <a
                  (click)="changeLanguage('en')"
                  class="hover:bg-primary hover:text-white"
                  >🇺🇸 English</a
                >
              </li>
            </ul>
          </div>

          <!-- Volunteer Button -->
          <button
            class="btn btn-outline btn-primary btn-sm"
            (click)="openVolunteerForm()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mr-1"
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
            Voluntariado
          </button>

          <!-- Donation Button -->
          <button class="btn btn-primary btn-sm" (click)="openDonationForm()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mr-1"
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
            Donar
          </button>
        </div>

        <!-- Mobile CTA Button -->
        <div class="lg:hidden">
          <button class="btn btn-primary btn-sm" (click)="openDonationForm()">
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
          </button>
        </div>
      </div>
    </div>

    <!-- Impact Banner (optional - can be toggled) -->
    <div
      class="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 text-center text-sm"
      [class.hidden]="!showImpactBanner()"
    >
      <div class="flex items-center justify-center space-x-4">
        <span class="font-medium">🎉 ¡Nuevo logro!</span>
        <span
          >Hemos ayudado a más de {{ impactCounter() }} personas este año</span
        >
        <button
          class="btn btn-ghost btn-xs text-white hover:bg-white hover:text-primary"
          (click)="hideImpactBanner()"
        >
          ✕
        </button>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .navbar {
        min-height: 4rem;
      }

      .stats {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
      }

      .dropdown-content {
        animation: fadeIn 0.2s ease-in-out;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(-10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .menu li a {
        border-radius: 8px;
        transition: all 0.2s ease-in-out;
      }

      .menu li a:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }

      .btn-primary {
        background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
        border: none;
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        transition: all 0.2s ease-in-out;
      }

      .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
      }

      .logo-gradient {
        background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
      }

      .impact-banner {
        animation: slideDown 0.5s ease-in-out;
      }

      @keyframes slideDown {
        from {
          transform: translateY(-100%);
        }
        to {
          transform: translateY(0);
        }
      }

      @media (max-width: 1023px) {
        .navbar-start {
          flex: none;
          width: auto;
        }
        .navbar-center {
          flex: 1;
          justify-content: center;
        }
        .navbar-end {
          flex: none;
        }
      }
    `,
  ],
})
export class NavbarComponent {
  // Signals for reactive state management
  isMobileMenuOpen = signal(false);
  showImpactBanner = signal(true);
  impactCounter = signal(15847);
  currentLanguage = signal('es');

  constructor(private router: Router) {
    // Simulate real-time impact counter
    this.startImpactCounter();
  }

  // Mobile menu toggle
  toggleMobileMenu() {
    this.isMobileMenuOpen.update((isOpen) => !isOpen);
  }

  // Close mobile menu when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown') && this.isMobileMenuOpen()) {
      this.isMobileMenuOpen.set(false);
    }
  }

  // Impact banner controls
  hideImpactBanner() {
    this.showImpactBanner.set(false);
  }

  // Language switching
  changeLanguage(lang: 'es' | 'en') {
    this.currentLanguage.set(lang);
    // Implement actual language switching logic here
    console.log('Language changed to:', lang);
  }

  // CTA Actions
  openDonationForm() {
    // Navigate to donation page or open modal
    this.router.navigate(['/donate']);
    this.isMobileMenuOpen.set(false);
  }

  openVolunteerForm() {
    // Navigate to volunteer page or open modal
    this.router.navigate(['/volunteer']);
    this.isMobileMenuOpen.set(false);
  }

  // Simulate real-time impact counter
  private startImpactCounter() {
    setInterval(() => {
      // Simulate occasional impact increases
      if (Math.random() < 0.1) {
        // 10% chance every interval
        this.impactCounter.update((count) => count + 1);
      }
    }, 30000); // Check every 30 seconds
  }
}
