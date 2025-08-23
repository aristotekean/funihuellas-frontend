import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NavbarComponent } from '../shared/components/navbar.component';
import { FooterComponent } from '../shared/components/footer.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <!-- Layout Container -->
    <div class="min-h-screen flex flex-col bg-base-100">
      <!-- Header/Navbar -->
      <header class="sticky top-0 z-50">
        <app-navbar></app-navbar>
      </header>

      <!-- Main Content Area -->
      <main class="flex-1 flex flex-col">
        <!-- Page Content -->
        <div class="flex-1">
          <router-outlet></router-outlet>
        </div>
      </main>

      <!-- Footer -->
      <footer class="mt-auto">
        <app-footer></app-footer>
      </footer>
    </div>
  `,
  styles: [],
})
export class LayoutComponent implements OnInit {
  private router = inject(Router);
  
  constructor() {
    // Layout component initialization
    this.setupLayoutEnhancements();
  }
  
  ngOnInit() {
    // Handle route changes for scroll management
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Check if there's a fragment (hash) in the URL
        if (event.urlAfterRedirects.includes('#')) {
          const fragment = event.urlAfterRedirects.split('#')[1];
          setTimeout(() => this.scrollToFragment(fragment), 100);
        }
      });
  }
  
  /**
   * Scroll to a specific fragment/section
   * @param fragment - The fragment to scroll to
   */
  private scrollToFragment(fragment: string): void {
    const element = document.getElementById(fragment);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }

  /**
   * Setup additional layout enhancements
   * This method can be extended to add more layout-specific functionality
   */
  private setupLayoutEnhancements(): void {
    // Add viewport meta tag if not present (for mobile responsiveness)
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewportMeta = document.createElement('meta');
      viewportMeta.name = 'viewport';
      viewportMeta.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(viewportMeta);
    }

    // Add theme-color meta tag for mobile browsers
    if (!document.querySelector('meta[name="theme-color"]')) {
      const themeColorMeta = document.createElement('meta');
      themeColorMeta.name = 'theme-color';
      themeColorMeta.content = '#3b82f6'; // Primary color
      document.head.appendChild(themeColorMeta);
    }

    // Add body classes for layout styling
    document.body.classList.add('layout-initialized');

    // Setup keyboard navigation enhancements
    this.setupKeyboardNavigation();
  }

  /**
   * Setup keyboard navigation for better accessibility
   */
  private setupKeyboardNavigation(): void {
    document.addEventListener('keydown', (event) => {
      // Skip to main content (Alt + M)
      if (event.altKey && event.key === 'm') {
        event.preventDefault();
        const mainContent = document.querySelector('main');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Skip to navigation (Alt + N)
      if (event.altKey && event.key === 'n') {
        event.preventDefault();
        const navbar = document.querySelector('app-navbar');
        if (navbar) {
          navbar.scrollIntoView({ behavior: 'smooth' });
        }
      }

      // Skip to footer (Alt + F)
      if (event.altKey && event.key === 'f') {
        event.preventDefault();
        const footer = document.querySelector('app-footer');
        if (footer) {
          footer.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}
