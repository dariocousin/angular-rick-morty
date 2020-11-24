import { LocationsService } from './../../../../shared/services/locations.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location-detail-page',
  templateUrl: './location-detail-page.component.html',
  styleUrls: ['./location-detail-page.component.scss']
})
export class LocationDetailPageComponent implements OnInit {

  locationDetail: any = {};
  
  constructor(private route: ActivatedRoute, private locationsService :LocationsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      this.locationsService.getLocation(id).subscribe(location => {
        this.locationDetail = location;
      })
    })
  }

}
