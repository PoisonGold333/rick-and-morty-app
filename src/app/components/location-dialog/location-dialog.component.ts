import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { RickMortyApiService } from '../../services/rick-morty-api.service';
import { Location } from '../../models/location.model';

@Component({
  selector: 'app-location-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatChipsModule
  ],
  templateUrl: './location-dialog.component.html',
  styleUrls: ['./location-dialog.component.css']
})
export class LocationDialogComponent implements OnInit {
  location: Location | null = null;
  loading = true;

  constructor(
    public dialogRef: MatDialogRef<LocationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public locationUrl: string,
    private apiService: RickMortyApiService
  ) {}

  ngOnInit() {
    this.loadLocation();
  }

  loadLocation() {
    this.apiService.getLocationByUrl(this.locationUrl).subscribe({
      next: (location) => {
        this.location = location;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error cargando ubicación:', error);
        this.loading = false;
      }
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
