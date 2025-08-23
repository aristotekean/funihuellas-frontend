import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
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
  thumbnailUrl?: string;
  duration?: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, YouTubePlayer],
  templateUrl: './testimonials.html',
})
export class TestimonialsComponent implements OnInit, OnDestroy, AfterViewInit {
  activeVideoId: string | null = null;
  isFullscreenVideo = false;

  videoTestimonials: VideoTestimonial[] = [
    {
      id: '1',
      name: 'Jack F.',
      role: 'Desarrollador Junior',
      videoId: 'RFua6XgcRwU',
      quote: 'I shipped in 6 days as a noob coder... This is awesome',
      impact: 'Desarrollo en 6 días',
      location: 'Estados Unidos',
      duration: '1:45',
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
      duration: '2:30',
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
      duration: '3:15',
    },
  ];

  ngOnInit(): void {
    // Load the YouTube API with proper parameters
    if (!window.YT) {
      const tag = document.createElement('script');
      // Add enablejsapi=1 to fix cross-origin issues
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    }

    // Generate thumbnail URLs for each video
    this.videoTestimonials.forEach((testimonial) => {
      testimonial.thumbnailUrl = `https://img.youtube.com/vi/${testimonial.videoId}/hqdefault.jpg`;
    });
  }

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
