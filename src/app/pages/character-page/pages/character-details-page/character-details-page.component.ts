import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-character-details-page',
  templateUrl: './character-details-page.component.html',
  styleUrls: ['./character-details-page.component.scss']
})
export class CharacterDetailsPageComponent implements OnInit {

  characterDetail = {};

  constructor(private route: ActivatedRoute, private characterServices: CharactersService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      const id = params.get('id');

      this.characterServices.getCharacter(id).subscribe(character => {
          this.characterDetail = character;
      })
    })
  }

}
