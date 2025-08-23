import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

interface VideoTestimonial {
  id: string;
  name: string;
  role: string;
  videoId: string;
  quote: string;
  impact: string;
  location: string;
  thumbnailUrl?: string;
  duration?: string;
}

@Component({
  selector: 'app-testimonials',
  imports: [YouTubePlayer],
  templateUrl: './testimonials.html',
})
export class TestimonialsComponent implements OnInit, OnDestroy, AfterViewInit {
  activeVideoId: string | null = null;
  isFullscreenVideo = false;

  videoTestimonials: VideoTestimonial[] = [
    {
      id: '1',
      name: 'Sofía Pérez',
      role: 'Voluntaria',
      videoId: 'CMOoy776Pm4',
      quote:
        'Ver las sonrisas de los niños después de tanto sufrimiento es la mayor recompensa. Funihuellas les da un nuevo comienzo.',
      impact: 'Apoyo a niños del conflicto',
      location: 'Colombia',
      duration: '1:45',
    },
    {
      id: '2',
      name: 'María González',
      role: 'Madre Beneficiaria',
      videoId: 'gU5AYz8x0YU',
      quote:
        'Gracias a Funihuellas, mis hijos tienen comida cada día. Han cambiado nuestras vidas completamente.',
      impact: '3 hijos alimentados diariamente',
      location: 'Colombia',
      duration: '2:30',
    },
    {
      id: '3',
      name: 'Carlos Ramírez',
      role: 'Líder Comunitario',
      videoId: '6g2eDMHwe2M',
      quote:
        'Nuestra comunidad ha cambiado gracias a su apoyo. Ahora tenemos esperanza y un futuro mejor.',
      impact: '200 familias beneficiadas',
      location: 'Venezuela',
      duration: '3:15',
    },
  ];

  ngOnInit(): void {}

  playVideo(videoId: string): void {
    this.activeVideoId = videoId;
    this.isFullscreenVideo = true;
  }

  closeVideo(): void {
    this.activeVideoId = null;
    this.isFullscreenVideo = false;
  }

  getPlayerVars(): YT.PlayerVars {
    return {
      autoplay: 1,
      controls: 1,
      fs: 1,
      rel: 0,
      modestbranding: 1,
      playsinline: 0,
      origin: window.location.origin, // Fix for cross-origin issue
    };
  }

  getActiveTestimonial(): VideoTestimonial | undefined {
    if (!this.activeVideoId) return undefined;
    return this.videoTestimonials.find((t) => t.videoId === this.activeVideoId);
  }

  // Handle ESC key to close video
  ngAfterViewInit(): void {
    document.addEventListener('keydown', this.handleEscKey);
  }

  // Clean up event listener
  ngOnDestroy(): void {
    document.removeEventListener('keydown', this.handleEscKey);
  }

  private handleEscKey = (event: KeyboardEvent): void => {
    if (event.key === 'Escape' && this.isFullscreenVideo) {
      this.closeVideo();
    }
  };
}
