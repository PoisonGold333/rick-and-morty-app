import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

import { RickMortyApiService } from './services/rick-morty-api.service';
import { Character, CharacterResponse } from './models/character.model';
import { CharacterDetailDialogComponent } from './components/character-detail-dialog/character-detail-dialog.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatIconModule,
    RouterOutlet,
    RouterModule,
    MatToolbarModule,
    CharacterCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rick and Morty App';
  characters: Character[] = [];
  loading = true;
  
  currentPage = 1;
  totalPages = 0;
  totalCharacters = 0;
  pageSize = 20;

  constructor(
    private apiService: RickMortyApiService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.loading = true;
    
    this.apiService.getCharacters(this.currentPage).subscribe({
      next: (response: CharacterResponse) => {
        this.characters = response.results;
        this.totalPages = response.info.pages;
        this.totalCharacters = response.info.count;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error cargando personajes:', error);
        this.loading = false;
      }
    });
  }

  onCharacterClick(character: Character) {
    this.dialog.open(CharacterDetailDialogComponent, {
      data: character,
      width: '700px',
      maxHeight: '80vh'
    });
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.loadCharacters();
  }
}
