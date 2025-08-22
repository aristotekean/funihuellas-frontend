import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../shared/components/navbar.component';
import { FooterComponent } from '../shared/components/footer.component';

@Component({
  selector: 'app-layout',
  imports: [ RouterOutlet, NavbarComponent, FooterComponent],
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
  styles: [
    `
      :host {
        display: block;
        min-height: 100vh;
      }

      /* Ensure proper layout flow */
      .min-h-screen {
        min-height: 100vh;
      }

      /* Smooth scrolling for the entire layout */
      html {
        scroll-behavior: smooth;
      }

      /* Main content area styling */
      main {
        position: relative;
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
        main {
          padding-top: 0;
        }
      }

      /* Loading state (optional - can be used for page transitions) */
      .content-loading {
        opacity: 0.7;
        pointer-events: none;
        transition: opacity 0.3s ease-in-out;
      }

      /* Animation for page transitions */
      router-outlet + * {
        animation: fadeIn 0.3s ease-in-out;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Ensure footer stays at bottom */
      footer {
        flex-shrink: 0;
      }

      /* Print styles */
      @media print {
        header,
        footer {
          display: none;
        }

        main {
          padding: 0;
          margin: 0;
        }
      }

      /* High contrast mode support */
      @media (prefers-contrast: high) {
        .min-h-screen {
          background: white;
          color: black;
        }
      }

      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }

        html {
          scroll-behavior: auto;
        }
      }
    `,
  ],
})
export class LayoutComponent {
  constructor() {
    // Layout component initialization
    this.setupLayoutEnhancements();
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
