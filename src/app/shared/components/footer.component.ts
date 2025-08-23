import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  template: `
    <footer class="bg-base-200 text-base-content py-8 sm:py-12">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Main footer content -->
        <div
          class="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-6 sm:gap-8 mb-6 sm:mb-8"
        >
          <!-- Brand section -->
          <div class="flex items-center w-full md:w-auto">
            <div
              class="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center mr-3 sm:mr-4"
            >
              <span class="text-primary-content text-lg sm:text-xl font-bold"
                >F</span
              >
            </div>
            <div>
              <div class="font-bold text-lg sm:text-xl">FUNIHUELLAS</div>
              <div class="text-xs sm:text-sm opacity-70">
                "El poder del hombre está en los niños"
              </div>
            </div>
          </div>

          <!-- Contact info -->
          <div
            class="flex flex-col sm:flex-row gap-4 sm:gap-6 text-xs sm:text-sm w-full md:w-auto"
          >
            <div class="flex items-center gap-2 min-h-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-primary flex-shrink-0"
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
              <span>Saravena, Arauca</span>
            </div>
            <div class="flex items-center gap-2 min-h-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-success flex-shrink-0"
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
              <a
                href="tel:+573213395439"
                class="hover:text-primary transition-colors"
                >321 339 5439</a
              >
            </div>
            <div class="flex items-center gap-4 min-h-10">
              <a
                href="https://facebook.com/FuniDejandoHuellas"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-primary transition-colors p-2 -m-2"
                aria-label="Síguenos en Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  class="fill-current"
                >
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                  ></path>
                </svg>
              </a>
              <a
                href="mailto:funihuellas@hotmail.com"
                class="hover:text-primary transition-colors p-2 -m-2"
                aria-label="Envíanos un email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  class="fill-current"
                >
                  <path
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Bottom section -->
        <div
          class="border-t border-base-300 pt-4 sm:pt-6 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm opacity-70"
        >
          <p class="text-center md:text-left">
            © 2024 FUNIHUELLAS - Fundación Niños Dejando Huellas
          </p>
          <div class="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span class="text-primary font-semibold">92% va a programas</span>
            <span class="hidden sm:inline">•</span>
            <span>Donaciones 100% deducibles</span>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: ``,
})
export class FooterComponent {}
