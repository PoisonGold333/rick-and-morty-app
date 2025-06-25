import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { RickMortyApiService } from '../../services/rick-morty-api.service';
import { Episode } from '../../models/episode.model';

@Component({
  selector: 'app-episode-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './episode-dialog.component.html',
  styleUrls: ['./episode-dialog.component.css']
})
export class EpisodeDialogComponent implements OnInit {
  episode: Episode | null = null;
  loading = true;

  constructor(
    public dialogRef: MatDialogRef<EpisodeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public episodeUrl: string,
    private apiService: RickMortyApiService
  ) {}

  ngOnInit() {
    this.loadEpisode();
  }

  loadEpisode() {
    this.apiService.getEpisodeByUrl(this.episodeUrl).subscribe({
      next: (episode) => {
        this.episode = episode;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error cargando episodio:', error);
        this.loading = false;
      }
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
