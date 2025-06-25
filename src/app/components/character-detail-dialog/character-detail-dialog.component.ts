import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { Character } from '../../models/character.model';
import { LocationDialogComponent } from '../location-dialog/location-dialog.component';
import { EpisodeDialogComponent } from '../episode-dialog/episode-dialog.component';

@Component({
  selector: 'app-character-detail-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './character-detail-dialog.component.html',
  styleUrls: ['./character-detail-dialog.component.css']
})
export class CharacterDetailDialogComponent {
  showAllEpisodes = false;

  constructor(
    public dialogRef: MatDialogRef<CharacterDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public character: Character,
    private dialog: MatDialog
  ) {}

  openLocationDialog() {
    if (this.character.location.url) {
      this.dialog.open(LocationDialogComponent, {
        data: this.character.location.url,
        width: '500px'
      });
    }
  }

  openEpisodeDialog(episodeUrl: string) {
    this.dialog.open(EpisodeDialogComponent, {
      data: episodeUrl,
      width: '500px'
    });
  }

  getFirstEpisodes(): string[] {
    return this.character.episode.slice(0, 6);
  }

  getRemainingEpisodes(): string[] {
    return this.character.episode.slice(6);
  }

  getStatusClass(): string {
    switch (this.character.status.toLowerCase()) {
      case 'alive':
        return 'status-alive';
      case 'dead':
        return 'status-dead';
      default:
        return 'status-unknown';
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
