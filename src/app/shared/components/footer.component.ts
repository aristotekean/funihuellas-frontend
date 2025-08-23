import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  template: `
    <footer
      class="footer sm:footer-horizontal bg-base-200 text-base-content p-10"
    >
      <aside class="flex flex-col space-y-4">
        <div class="flex items-center">
          <div
            class="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3"
          >
            <span class="text-primary-content text-lg font-bold">F</span>
          </div>
          <div>
            <div class="font-bold text-lg">FUNIHUELLAS</div>
            <div class="text-sm opacity-70">
              "El poder del hombre está en los niños"
            </div>
          </div>
        </div>
        <p class="text-sm max-w-xs leading-relaxed">
          Fundación Niños Dejando Huellas - Transformando vidas desde 2016 a
          través de educación, apoyo psicosocial y desarrollo integral.
        </p>
        <div class="text-xs opacity-60">
          <p>NIT: 901.020.326-1</p>
          <p>Registro Mercantil: SO500897</p>
          <p>Entidad sin ánimo de lucro</p>
        </div>
      </aside>

      <nav>
        <h6 class="footer-title">Programas</h6>
        <a href="#programas" class="link link-hover">Educación Integral</a>
        <a href="#programas" class="link link-hover">Apoyo Psicosocial</a>
        <a href="#programas" class="link link-hover">Nutrición y Salud</a>
        <a href="#programas" class="link link-hover">Formación Técnica</a>
      </nav>

      <nav>
        <h6 class="footer-title">Organización</h6>
        <a href="#nosotros" class="link link-hover">Sobre Nosotros</a>
        <a href="#impacto" class="link link-hover">Nuestro Impacto</a>
        <a href="#transparencia" class="link link-hover">Transparencia</a>
        <a href="#contacto" class="link link-hover">Contacto</a>
      </nav>

      <nav>
        <h6 class="footer-title">Cómo Ayudar</h6>
        <a href="#donar" class="link link-hover">Donar Ahora</a>
        <a href="#donar" class="link link-hover">Donación Mensual</a>
        <a href="#contacto" class="link link-hover">Voluntariado</a>
        <a href="#contacto" class="link link-hover">Donaciones en Especie</a>
      </nav>
    </footer>

    <footer
      class="footer bg-base-300 text-base-content border-base-200 border-t px-10 py-6"
    >
      <aside class="flex flex-col md:flex-row md:items-center gap-4">
        <div class="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-primary"
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
          <div class="text-sm">
            <div class="font-semibold">Sede Principal</div>
            <div>Cra 16 Nº 16-26 B Gaitán, Saravena - Arauca</div>
          </div>
        </div>
        <div class="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-success"
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
          <div class="text-sm">
            <div class="font-semibold">Contacto</div>
            <div>321 339 5439 • 313 312 4651</div>
          </div>
        </div>
      </aside>

      <nav class="md:place-self-center md:justify-self-end">
        <div class="flex items-center space-x-4">
          <div class="text-sm text-center">
            <div class="font-semibold text-primary">92%</div>
            <div class="text-xs opacity-70">Va a programas</div>
          </div>
          <div class="grid grid-flow-col gap-3">
            <a
              href="https://facebook.com/FuniDejandoHuellas"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-primary transition-colors"
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
              class="hover:text-primary transition-colors"
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
            <a
              href="tel:+573213395439"
              class="hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </footer>

    <div class="bg-base-300 text-center py-4 px-6">
      <div class="container mx-auto">
        <p class="text-sm text-base-content/70">
          © 2024 FUNIHUELLAS - Fundación Niños Dejando Huellas. Todos los
          derechos reservados.
          <span class="mx-2">•</span>
          <a
            href="#transparencia"
            class="link link-hover text-primary font-semibold"
          >
            Donaciones 100% deducibles de impuestos
          </a>
        </p>
      </div>
    </div>
  `,
  styles: ``,
})
export class FooterComponent {}
