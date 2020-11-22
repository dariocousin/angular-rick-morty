import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritePageService {

  favorites = [];

  constructor() { }

  addFavorite(newFavorite){
    this.favorites.push(newFavorite);
  }

  getFavorites(){
    return this.favorites;
  }

}
