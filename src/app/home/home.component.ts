import { Component, inject } from '@angular/core';
import { HousinglocationComponent } from '../housinglocation/housinglocation.component';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

  export class HomeComponent {
    readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  
    housingLocationList: Housinglocation[]  = [];
    housingService: HousingService = inject(HousingService);

    filteredLocationList: Housinglocation[] = [];


    /* constructor() {
      this.housingLocationList = this.housingService.getAllHousingLocations();
      this.filteredLocationList = this.housingLocationList;
    } */

    constructor() {
      this.housingService.getAllHousingLocations().then((housingLocationList: Housinglocation[]) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
    }

    filterResults(text: string) {
      if (!text) {
        this.filteredLocationList = this.housingLocationList;
      }
    
      this.filteredLocationList = this.housingLocationList.filter(
        housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
      );
      console.log(this.filteredLocationList);
    }



    }
