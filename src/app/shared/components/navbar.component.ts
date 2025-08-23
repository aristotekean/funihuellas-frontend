import { Component, inject } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  template: `
    <div class="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-2 sm:px-4">
      <div class="navbar-start">
        <div class="dropdown">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost btn-square lg:hidden min-h-12 w-12"
            aria-label="Open menu"
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[99] mt-3 w-64 p-3 shadow-lg border border-base-300"
          >
            <li>
              <a
                (click)="scrollToSection('impacto')"
                class="py-3 px-4 text-base rounded-lg"
                >Nuestro Impacto</a
              >
            </li>
            <li>
              <a
                (click)="scrollToSection('programas')"
                class="py-3 px-4 text-base rounded-lg"
                >Programas</a
              >
            </li>
            <li>
              <a
                (click)="scrollToSection('nosotros')"
                class="py-3 px-4 text-base rounded-lg"
                >Nosotros</a
              >
            </li>
            <li>
              <a
                (click)="scrollToSection('transparencia')"
                class="py-3 px-4 text-base rounded-lg"
                >Transparencia</a
              >
            </li>
            <li>
              <a
                (click)="scrollToSection('contacto')"
                class="py-3 px-4 text-base rounded-lg"
                >Contacto</a
              >
            </li>
            <li class="pt-2 border-t border-base-300 mt-2">
              <a
                (click)="scrollToSection('donar')"
                class="py-3 px-4 text-base rounded-lg btn btn-primary btn-sm w-full text-primary-content"
              >
                Donar Ahora
              </a>
            </li>
          </ul>
        </div>
        <div class="flex items-center ml-2">
          <div
            class="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center mr-2 sm:mr-3"
          >
            <span class="text-primary-content text-sm sm:text-base font-bold"
              >F</span
            >
          </div>
          <a
            routerLink="/home"
            class="btn btn-ghost text-sm sm:text-lg font-bold px-2 sm:px-4"
          >
            <span class="hidden sm:inline">FUNIHUELLAS</span>
            <span class="sm:hidden">FUNI</span>
          </a>
        </div>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li>
            <a
              (click)="scrollToSection('impacto')"
              class="hover:text-primary cursor-pointer px-3 py-2"
              >Nuestro Impacto</a
            >
          </li>
          <li>
            <a
              (click)="scrollToSection('programas')"
              class="hover:text-primary cursor-pointer px-3 py-2"
              >Programas</a
            >
          </li>
          <li>
            <a
              (click)="scrollToSection('nosotros')"
              class="hover:text-primary cursor-pointer px-3 py-2"
              >Nosotros</a
            >
          </li>
          <li>
            <a
              (click)="scrollToSection('transparencia')"
              class="hover:text-primary cursor-pointer px-3 py-2"
              >Transparencia</a
            >
          </li>
          <li>
            <a
              (click)="scrollToSection('contacto')"
              class="hover:text-primary cursor-pointer px-3 py-2"
              >Contacto</a
            >
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <a
          (click)="scrollToSection('donar')"
          class="btn btn-primary cursor-pointer hidden lg:inline-flex min-h-10 px-4"
          >Donar Ahora</a
        >
      </div>
    </div>
  `,
  styles: `
    .navbar {
      backdrop-filter: blur(10px);
      background-color: rgba(255, 255, 255, 0.95);
    }
    
    .navbar-scrolled {
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }
  `,
})
export class NavbarComponent {
  private router = inject(Router);

  constructor() {
    // Listen to route changes to handle scroll behavior
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Reset scroll position when navigating to a new route
        window.scrollTo(0, 0);
      });

    // Add scroll listener for navbar styling
    this.setupScrollListener();
  }

  /**
   * Scroll to a specific section on the page
   * @param sectionId - The ID of the section to scroll to
   */
  scrollToSection(sectionId: string): void {
    // First navigate to home if we're not already there
    if (this.router.url !== '/home' && this.router.url !== '/') {
      this.router.navigate(['/home']).then(() => {
        // Wait for navigation to complete, then scroll
        setTimeout(() => this.performScroll(sectionId), 100);
      });
    } else {
      this.performScroll(sectionId);
    }
  }

  /**
   * Perform the actual scrolling to the section
   * @param sectionId - The ID of the section to scroll to
   */
  private performScroll(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset to account for fixed navbar
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  }

  /**
   * Setup scroll listener for navbar styling effects
   */
  private setupScrollListener(): void {
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('navbar-scrolled');
        } else {
          navbar.classList.remove('navbar-scrolled');
        }
      }
    });
  }
}
