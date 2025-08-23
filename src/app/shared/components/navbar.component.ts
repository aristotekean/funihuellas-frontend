import { Component, inject } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule],
  template: `
    <div class="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[99] mt-3 w-52 p-2 shadow"
          >
            <li><a (click)="scrollToSection('impacto')">Nuestro Impacto</a></li>
            <li><a (click)="scrollToSection('programas')">Programas</a></li>
            <li><a (click)="scrollToSection('nosotros')">Nosotros</a></li>
            <li><a (click)="scrollToSection('transparencia')">Transparencia</a></li>
            <li><a (click)="scrollToSection('contacto')">Contacto</a></li>
          </ul>
        </div>
        <div class="flex items-center">
          <div
            class="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-2"
          >
            <span class="text-primary-content text-sm font-bold">F</span>
          </div>
          <a routerLink="/home" class="btn btn-ghost text-lg font-bold">FUNIHUELLAS</a>
        </div>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li>
            <a (click)="scrollToSection('impacto')" class="hover:text-primary cursor-pointer">Nuestro Impacto</a>
          </li>
          <li><a (click)="scrollToSection('programas')" class="hover:text-primary cursor-pointer">Programas</a></li>
          <li><a (click)="scrollToSection('nosotros')" class="hover:text-primary cursor-pointer">Nosotros</a></li>
          <li>
            <a (click)="scrollToSection('transparencia')" class="hover:text-primary cursor-pointer"
              >Transparencia</a
            >
          </li>
          <li><a (click)="scrollToSection('contacto')" class="hover:text-primary cursor-pointer">Contacto</a></li>
        </ul>
      </div>
      <div class="navbar-end">
        <a (click)="scrollToSection('donar')" class="btn btn-primary cursor-pointer">Donar Ahora</a>
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
        behavior: 'smooth'
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
