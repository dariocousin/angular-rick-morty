import { CharactersService } from './../../shared/services/characters.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent implements OnInit {

  charactersList;

  constructor(private charactersServices: CharactersService) { }

  ngOnInit(): void {

    this.charactersServices.getCharacters().pipe(take(1)).subscribe(
      (res: any) => {
        this.charactersList = res.results;
      }
    );
  }

}
