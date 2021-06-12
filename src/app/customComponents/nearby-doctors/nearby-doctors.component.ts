import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nearby-doctors',
  templateUrl: './nearby-doctors.component.html',
  styleUrls: ['./nearby-doctors.component.css']
})
export class NearbyDoctorsComponent implements OnInit {

  zoom = 16
  center: any
  options: google.maps.MapOptions = {
    maxZoom: 25,
    minZoom: 8,
  }
  
  markers: any;

  constructor() { }

  ngOnInit(): void {
    
    //if geolocation permissions are granted
    if('geolocation' in navigator){
      
      //using HTML's navigator API to get the current location 
      navigator.geolocation.getCurrentPosition((position) => {
        
        //centering the map around the user's location
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
      }, (err) => {
        alert('Some error occured' + err)
      })
    }

    //if permissions are not granted
    else{
      alert('Please turn on your location!')
    }
  }

}
