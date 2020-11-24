import { Component, OnInit, Input } from '@angular/core';
import { FavoritePageService } from '../../services/local/favorite-page.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() galleryList;

  @Input() url = 'characters';

  insideFavorite: boolean;

  constructor(private itemFavoriteService: FavoritePageService) { }

  ngOnInit(): void {

  }

  addFavoriteService(item){
    this.itemFavoriteService.addFavorite(item);
    this.alreadyFavorite(item.id);
  }

  removeFavoriteService(item){
    this.itemFavoriteService.removeFavorite(item);
  }

  alreadyFavorite(id){
    if(this.itemFavoriteService.getFavoriteId(id)){
      this.insideFavorite = true;
    }
  }

  // showFavoritesPage(){
  //   this.pageFavorites = true;
  // }

}
