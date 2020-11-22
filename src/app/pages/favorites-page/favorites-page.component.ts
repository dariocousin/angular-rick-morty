import { Component, OnInit } from '@angular/core';
import { FavoritePageService } from 'src/app/shared/services/local/favorite-page.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {

  allMyFavorites: any = [];

  constructor(private favoritesLocalServices: FavoritePageService) { }

  ngOnInit(): void {
    // console.log(this.favoritesLocalServices.getFavorites());

    this.allMyFavorites = this.favoritesLocalServices.getFavorites();
  }

}
