import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MenuComponent } from './core/components/menu/menu.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { LocationPageComponent } from './pages/location-page/location-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { CharacterDetailsPageComponent } from './pages/character-page/pages/character-details-page/character-details-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuComponent,
    CharacterPageComponent,
    LocationPageComponent,
    FavoritesPageComponent,
    ContactPageComponent,
    GalleryComponent,
    CharacterDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
