import { LocationsService } from './../../shared/services/locations.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.scss']
})
export class LocationPageComponent implements OnInit {

  locationsList;

  constructor(private locationServices: LocationsService) { }

  ngOnInit(): void {
    this.locationServices.getLocations().subscribe(
      (res: any) => {
        this.locationsList = res.results;
      }
    )
  }

}
