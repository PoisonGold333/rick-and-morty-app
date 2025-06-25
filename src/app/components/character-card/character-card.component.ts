import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent {
  @Input() character!: Character;
  @Output() characterClick = new EventEmitter<Character>();

  onCharacterClick() {
    this.characterClick.emit(this.character);
  }
}
