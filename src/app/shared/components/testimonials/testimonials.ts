import { Component } from '@angular/core';
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
  imports: [YouTubePlayer], // YouTubePlayer used as <youtube-player> in template
  templateUrl: './testimonials.html',
})
export class TestimonialsComponent {
  selectedVideo: VideoTestimonial | null = null;
  showVideoModal = false;

  videoTestimonials: VideoTestimonial[] = [
    {
      id: '1',
      name: 'Jack F.',
      role: 'Desarrollador Junior',
      videoId: 'RFua6XgcRwU', // Extracted from the YouTube URL
      quote: 'I shipped in 6 days as a noob coder... This is awesome',
      impact: 'Desarrollo en 6 días',
      location: 'Estados Unidos',
    },
    {
      id: '2',
      name: 'María González',
      role: 'Madre Beneficiaria',
      videoId: 'mVjYG9TSN88', // Example video ID
      quote:
        'Gracias a Funihuellas, mis hijos tienen comida cada día. Han cambiado nuestras vidas completamente.',
      impact: '3 hijos alimentados diariamente',
      location: 'Colombia',
    },
    {
      id: '3',
      name: 'Carlos Ramírez',
      role: 'Líder Comunitario',
      videoId: 'dQw4w9WgXcQ', // Example video ID
      quote:
        'Nuestra comunidad ha cambiado gracias a su apoyo. Ahora tenemos esperanza y un futuro mejor.',
      impact: '200 familias beneficiadas',
      location: 'Venezuela',
    },
  ];

  playVideo(testimonialId: string): void {
    this.selectedVideo =
      this.videoTestimonials.find((t) => t.id === testimonialId) || null;
    this.showVideoModal = true;
  }

  playFeaturedVideo(): void {
    this.selectedVideo = this.videoTestimonials[0]; // Jack F.'s testimonial
    this.showVideoModal = true;
  }

  closeVideo(): void {
    this.selectedVideo = null;
    this.showVideoModal = false;
  }

  // YouTube Player configuration
  getPlayerVars() {
    return {
      autoplay: 1,
      controls: 1,
      disablekb: 0,
      enablejsapi: 1,
      fs: 1,
      iv_load_policy: 3,
      modestbranding: 1,
      playsinline: 1,
      rel: 0,
    };
  }

  onPlayerReady(event: any): void {
    // Player is ready
    console.log('YouTube player ready', event);
  }

  onPlayerStateChange(event: any): void {
    // Handle player state changes
    console.log('YouTube player state changed', event);
  }
}
