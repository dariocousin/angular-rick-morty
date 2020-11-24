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

  removeFavorite(itemToRemove){
    this.favorites.find(x => x.id === itemToRemove.id).splice(1, 1);
  }

  getFavorites(){
    return this.favorites;
  }

  getFavoriteId(id){
    return this.favorites.find(x => x.id === id);
  }

}
