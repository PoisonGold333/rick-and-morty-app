import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';

const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'characters', loadComponent: () => import('./app/pages/characters/characters.component').then(m => m.CharactersComponent) },
  { path: 'locations', loadComponent: () => import('./app/pages/locations/locations.component').then(m => m.LocationsComponent) },
  { path: 'episodes', loadComponent: () => import('./app/pages/episodes/episodes.component').then(m => m.EpisodesComponent) },
  { path: '**', redirectTo: '/characters' }
];

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
      HttpClientModule,
      RouterModule.forRoot(routes)
    )
  ]
}).catch(err => console.error(err));
