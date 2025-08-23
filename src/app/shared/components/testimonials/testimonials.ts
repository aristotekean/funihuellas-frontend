import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YouTubePlayer } from '@angular/youtube-player';

interface VideoTestimonial {
  id: string;
  name: string;
  role: string;
  videoId: string;
  quote: string;
  impact: string;
  location: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, YouTubePlayer],
  templateUrl: './testimonials.html',
})
export class TestimonialsComponent implements OnInit {
  videoTestimonials: VideoTestimonial[] = [
    {
      id: '1',
      name: 'Jack F.',
      role: 'Desarrollador Junior',
      videoId: 'RFua6XgcRwU',
      quote: 'I shipped in 6 days as a noob coder... This is awesome',
      impact: 'Desarrollo en 6 días',
      location: 'Estados Unidos',
    },
    {
      id: '2',
      name: 'María González',
      role: 'Madre Beneficiaria',
      videoId: 'mVjYG9TSN88',
      quote:
        'Gracias a Funihuellas, mis hijos tienen comida cada día. Han cambiado nuestras vidas completamente.',
      impact: '3 hijos alimentados diariamente',
      location: 'Colombia',
    },
    {
      id: '3',
      name: 'Carlos Ramírez',
      role: 'Líder Comunitario',
      videoId: 'dQw4w9WgXcQ',
      quote:
        'Nuestra comunidad ha cambiado gracias a su apoyo. Ahora tenemos esperanza y un futuro mejor.',
      impact: '200 familias beneficiadas',
      location: 'Venezuela',
    },
  ];

  ngOnInit(): void {
    // Load the YouTube API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    }
  }
}
