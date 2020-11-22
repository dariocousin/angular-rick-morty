import { Component, OnInit, Input } from '@angular/core';
import { FavoritePageService } from '../../services/local/favorite-page.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() galleryList;

  constructor(private itemToAddFavorite: FavoritePageService) { }

  ngOnInit(): void {

  }

  addFavoriteService(item){
    this.itemToAddFavorite.addFavorite(item);
  }

  // showFavoritesPage(){
  //   this.pageFavorites = true;
  // }

}
