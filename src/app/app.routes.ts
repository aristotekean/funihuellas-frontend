import { Routes } from '@angular/router';

export const routes: Routes = [
  // Redirect empty path to landing
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },

  // Main routes
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/landing/landing.component').then(
        (m) => m.LandingComponent
      ),
    title: 'FuniHuellas - Transformando Vidas',
    data: {
      description:
        'Fundación sin fines de lucro dedicada a transformar comunidades a través de educación, salud, medio ambiente y desarrollo sostenible.',
      keywords:
        'fundación, nonprofit, educación, salud, medio ambiente, desarrollo sostenible',
    },
  },

  // Programs routes with lazy loading
  //   {
  //     path: 'programs',
  //     children: [
  //       {
  //         path: '',
  //         loadComponent: () =>
  //           import('./pages/programs/programs-overview.component').then(
  //             (m) => m.ProgramsOverviewComponent
  //           ),
  //         title: 'Nuestros Programas - FuniHuellas',
  //       },
  //       {
  //         path: 'education',
  //         loadComponent: () =>
  //           import('./pages/programs/education/education.component').then(
  //             (m) => m.EducationComponent
  //           ),
  //         title: 'Programa de Educación - FuniHuellas',
  //         data: { program: 'education' },
  //       },
  //       {
  //         path: 'health',
  //         loadComponent: () =>
  //           import('./pages/programs/health/health.component').then(
  //             (m) => m.HealthComponent
  //           ),
  //         title: 'Programa de Salud - FuniHuellas',
  //         data: { program: 'health' },
  //       },
  //       {
  //         path: 'environment',
  //         loadComponent: () =>
  //           import('./pages/programs/environment/environment.component').then(
  //             (m) => m.EnvironmentComponent
  //           ),
  //         title: 'Programa de Medio Ambiente - FuniHuellas',
  //         data: { program: 'environment' },
  //       },
  //       {
  //         path: 'community',
  //         loadComponent: () =>
  //           import('./pages/programs/community/community.component').then(
  //             (m) => m.CommunityComponent
  //           ),
  //         title: 'Desarrollo Comunitario - FuniHuellas',
  //         data: { program: 'community' },
  //       },
  //     ],
  //   },

  // About routes
  //   {
  //     path: 'about',
  //     children: [
  //       {
  //         path: '',
  //         loadComponent: () =>
  //           import('./pages/about/about.component').then((m) => m.AboutComponent),
  //         title: 'Acerca de Nosotros - FuniHuellas',
  //       },
  //       {
  //         path: 'team',
  //         loadComponent: () =>
  //           import('./pages/about/team/team.component').then(
  //             (m) => m.TeamComponent
  //           ),
  //         title: 'Nuestro Equipo - FuniHuellas',
  //       },
  //       {
  //         path: 'mission',
  //         loadComponent: () =>
  //           import('./pages/about/mission/mission.component').then(
  //             (m) => m.MissionComponent
  //           ),
  //         title: 'Misión y Visión - FuniHuellas',
  //       },
  //       {
  //         path: 'history',
  //         loadComponent: () =>
  //           import('./pages/about/history/history.component').then(
  //             (m) => m.HistoryComponent
  //           ),
  //         title: 'Nuestra Historia - FuniHuellas',
  //       },
  //     ],
  //   },

  // Impact and reports
  //   {
  //     path: 'impact',
  //     children: [
  //       {
  //         path: '',
  //         loadComponent: () =>
  //           import('./pages/impact/impact.component').then(
  //             (m) => m.ImpactComponent
  //           ),
  //         title: 'Nuestro Impacto - FuniHuellas',
  //       },
  //       {
  //         path: 'stories',
  //         loadComponent: () =>
  //           import('./pages/impact/stories/stories.component').then(
  //             (m) => m.StoriesComponent
  //           ),
  //         title: 'Historias de Impacto - FuniHuellas',
  //       },
  //       {
  //         path: 'reports',
  //         loadComponent: () =>
  //           import('./pages/impact/reports/reports.component').then(
  //             (m) => m.ReportsComponent
  //           ),
  //         title: 'Informes de Transparencia - FuniHuellas',
  //       },
  //     ],
  //   },

  // Get involved routes
  //   {
  //     path: 'get-involved',
  //     children: [
  //       {
  //         path: '',
  //         loadComponent: () =>
  //           import('./pages/get-involved/get-involved.component').then(
  //             (m) => m.GetInvolvedComponent
  //           ),
  //         title: 'Únete a Nosotros - FuniHuellas',
  //       },
  //       {
  //         path: 'volunteer',
  //         loadComponent: () =>
  //           import('./pages/get-involved/volunteer/volunteer.component').then(
  //             (m) => m.VolunteerComponent
  //           ),
  //         title: 'Voluntariado - FuniHuellas',
  //       },
  //       {
  //         path: 'donate',
  //         loadComponent: () =>
  //           import('./pages/get-involved/donate/donate.component').then(
  //             (m) => m.DonateComponent
  //           ),
  //         title: 'Donar - FuniHuellas',
  //       },
  //       {
  //         path: 'partnerships',
  //         loadComponent: () =>
  //           import(
  //             './pages/get-involved/partnerships/partnerships.component'
  //           ).then((m) => m.PartnershipsComponent),
  //         title: 'Alianzas Estratégicas - FuniHuellas',
  //       },
  //     ],
  //   },

  // News and events
  //   {
  //     path: 'news',
  //     children: [
  //       {
  //         path: '',
  //         loadComponent: () =>
  //           import('./pages/news/news-list.component').then(
  //             (m) => m.NewsListComponent
  //           ),
  //         title: 'Noticias y Eventos - FuniHuellas',
  //       },
  //       {
  //         path: 'article/:id',
  //         loadComponent: () =>
  //           import('./pages/news/news-detail.component').then(
  //             (m) => m.NewsDetailComponent
  //           ),
  //         title: 'Artículo - FuniHuellas',
  //       },
  //       {
  //         path: 'events',
  //         loadComponent: () =>
  //           import('./pages/news/events/events.component').then(
  //             (m) => m.EventsComponent
  //           ),
  //         title: 'Eventos - FuniHuellas',
  //       },
  //     ],
  //   },

  // Contact
  //   {
  //     path: 'contact',
  //     loadComponent: () =>
  //       import('./pages/contact/contact.component').then(
  //         (m) => m.ContactComponent
  //       ),
  //     title: 'Contacto - FuniHuellas',
  //   },

  // Legal pages
  //   {
  //     path: 'legal',
  //     children: [
  //       {
  //         path: 'privacy',
  //         loadComponent: () =>
  //           import('./pages/legal/privacy/privacy.component').then(
  //             (m) => m.PrivacyComponent
  //           ),
  //         title: 'Política de Privacidad - FuniHuellas',
  //       },
  //       {
  //         path: 'terms',
  //         loadComponent: () =>
  //           import('./pages/legal/terms/terms.component').then(
  //             (m) => m.TermsComponent
  //           ),
  //         title: 'Términos y Condiciones - FuniHuellas',
  //       },
  //       {
  //         path: 'cookies',
  //         loadComponent: () =>
  //           import('./pages/legal/cookies/cookies.component').then(
  //             (m) => m.CookiesComponent
  //           ),
  //         title: 'Política de Cookies - FuniHuellas',
  //       },
  //     ],
  //   },

  // 404 - Not Found
  {
    path: '404',
    loadComponent: () =>
      import('./pages/error/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
    title: 'Página no encontrada - FuniHuellas',
  },

  // Wildcard route - must be last
  {
    path: '**',
    redirectTo: '/404',
  },
];
