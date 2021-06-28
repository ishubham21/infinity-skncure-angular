import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

//declaring an instance of google to access google maps
declare const google: any;

//variables for the Map properties 
let map: any;

//map options
let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

@Component({
  selector: 'app-nearby-doctors',
  templateUrl: './nearby-doctors.component.html',
  styleUrls: ['./nearby-doctors.component.css']
})
export class NearbyDoctorsComponent implements OnInit {

  doctorsList: any
  
  @ViewChild('map') mapElement!: ElementRef;

  constructor() { }

  ngOnInit(): void {  }

  ngAfterViewInit(){
    //if geolocation permissions are granted
    if ('geolocation' in navigator) {

      //using HTML's navigator API to get the current location
      navigator.geolocation.getCurrentPosition((position) => {

        //creating a map and appending it to the #map element present in HTML - center is user's present location
        map = new google.maps.Map(this.mapElement.nativeElement, {
          center: { lat: position.coords.latitude, lng: position.coords.longitude },
          zoom: 14
        });

        //creating a maps service instance
        const service = new google.maps.places.PlacesService(map);
        
        //powering nearby serach with center = user's location and radius = 4000mts
        service.nearbySearch({
          location: { lat: position.coords.latitude, lng: position.coords.longitude },
          radius: 5000,
          type: ['doctor'],
          keyword: ['dermatologist']
        }, (results: string | any[], status: any) => {
          
          this.doctorsList = results

          //create a marker for user's location
          this.createMarker({ geometry: { location: { lat: position.coords.latitude, lng: position.coords.longitude } }, name: 'Your Location' })

          //if status is ok, add markers
          if (status === google.maps.places.PlacesServiceStatus.OK) {

            for (let i = 0; i < results.length; i++) {
              this.createMarker(results[i])
            }
          }

          //if no doctors found, set doctors list to null
          else{
            this.doctorsList = null
          }
        });
      
      //in case of error - report
      }, (err) => {
        alert('Error in acquiring position occured.')
      })

    }

    //if permissions are not granted
    else {
      alert('Please turn on your location!')
    }

  }

  //function to create markers
  createMarker(place: any) {

    const placeLoc = place.geometry.location;
    
    //creating markers with the following specs
    new google.maps.Marker({
      map: map,
      position: placeLoc,
      label: place.name,
      options: { animation: google.maps.Animation.BOUNCE }
    });

  }
}
