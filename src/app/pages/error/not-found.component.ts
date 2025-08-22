import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  template: `
    <!-- 404 Error Page -->
    <div class="min-h-screen bg-base-100 flex items-center justify-center px-4">
      <div class="max-w-2xl mx-auto text-center">
        <!-- Error Illustration -->
        <div class="mb-8">
          <div class="text-9xl font-bold text-primary opacity-20 mb-4">404</div>
          <div class="relative">
            <svg
              class="w-64 h-64 mx-auto text-primary/30"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>

        <!-- Error Message -->
        <div class="mb-8">
          <h1 class="text-4xl md:text-5xl font-bold text-base-content mb-4">
            ¡Ups! Página no encontrada
          </h1>
          <p class="text-lg text-base-content/70 mb-6 max-w-md mx-auto">
            La página que buscas no existe o ha sido movida. Pero no te
            preocupes, puedes encontrar lo que necesitas desde nuestra página
            principal.
          </p>
        </div>

        <!-- Action Buttons -->
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <button class="btn btn-primary btn-lg px-8" routerLink="/home">
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Ir al Inicio
          </button>

          <button
            class="btn btn-outline btn-secondary btn-lg px-8"
            (click)="goBack()"
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Volver Atrás
          </button>
        </div>

        <!-- Quick Links -->
        <div class="border-t border-base-300 pt-8">
          <h3 class="text-lg font-semibold text-base-content mb-4">
            Enlaces útiles:
          </h3>
          <div class="flex flex-wrap justify-center gap-4">
            <a routerLink="/programs" class="link link-primary"
              >Nuestros Programas</a
            >
            <a routerLink="/about" class="link link-primary"
              >Acerca de Nosotros</a
            >
            <a routerLink="/get-involved/volunteer" class="link link-primary"
              >Voluntariado</a
            >
            <a routerLink="/get-involved/donate" class="link link-primary"
              >Donar</a
            >
            <a routerLink="/contact" class="link link-primary">Contacto</a>
          </div>
        </div>

        <!-- Search Box -->
        <div class="mt-8 max-w-md mx-auto">
          <div class="form-control">
            <div class="input-group">
              <input
                type="text"
                placeholder="¿Qué estás buscando?"
                class="input input-bordered flex-1"
                [(ngModel)]="searchQuery"
                (keyup.enter)="search()"
              />
              <button class="btn btn-square btn-primary" (click)="search()">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100vh;
      }

      /* Floating animation for the error icon */
      svg {
        animation: float 6s ease-in-out infinite;
      }

      @keyframes float {
        0% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-20px);
        }
        100% {
          transform: translateY(0px);
        }
      }

      /* Hover effects for links */
      .link:hover {
        text-decoration: underline;
        transform: translateY(-1px);
        transition: all 0.2s ease;
      }

      /* Button hover effects */
      .btn:hover {
        transform: translateY(-2px);
        transition: all 0.3s ease;
      }

      /* Input focus styles */
      .input:focus {
        border-color: hsl(var(--p));
        box-shadow: 0 0 0 2px hsl(var(--p) / 0.2);
      }

      /* Responsive text scaling */
      @media (max-width: 640px) {
        .text-9xl {
          font-size: 6rem;
        }

        svg {
          width: 12rem;
          height: 12rem;
        }
      }
    `,
  ],
})
export class NotFoundComponent {
  searchQuery = '';

  goBack(): void {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      // Fallback to home if no history
      window.location.href = '/home';
    }
  }

  search(): void {
    if (this.searchQuery.trim()) {
      // In a real app, you would navigate to a search results page
      // For now, we'll just redirect to home with a query parameter
      window.location.href = `/home?search=${encodeURIComponent(
        this.searchQuery
      )}`;
    }
  }
}
