import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

import { RickMortyApiService } from '../../services/rick-morty-api.service';
import { Character, CharacterResponse } from '../../models/character.model';
import { CharacterDetailDialogComponent } from '../../components/character-detail-dialog/character-detail-dialog.component';
import { CharacterCardComponent } from '../../components/character-card/character-card.component';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatIconModule,
    CharacterCardComponent
  ],
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
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
    this.currentPage = event.pageIndex + 1; // Material paginator es 0-based
    this.loadCharacters();
  }
}
