import { LocationDetailPageComponent } from './pages/location-page/pages/location-detail-page/location-detail-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { LocationPageComponent } from './pages/location-page/location-page.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterDetailsPageComponent } from './pages/character-page/pages/character-details-page/character-details-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'characters', component: CharacterPageComponent},
  {path: 'characters/:id', component: CharacterDetailsPageComponent},
  {path: 'locations', component: LocationPageComponent},
  {path: 'locations/:id', component: LocationDetailPageComponent},
  {path: 'favorites', component: FavoritesPageComponent},
  {path: 'contact', component: ContactPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
