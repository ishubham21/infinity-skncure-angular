import { Component, OnInit } from '@angular/core';
import { nearbyDocs } from "./nearby-doctors.interface";

@Component({
  selector: 'app-nearby-doctors',
  templateUrl: './nearby-doctors.component.html',
  styleUrls: ['./nearby-doctors.component.css']
})
export class NearbyDoctorsComponent implements OnInit {

  markers: nearbyDocs[] = []

  zoom = 16
  center: any
  options: google.maps.MapOptions = {
    maxZoom: 25,
    minZoom: 8,
  }

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

  addMarker() {
    this.zoom = 12
    this.markers.push({
      position: {
        lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
        lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
      },
      label: {
        color: 'red',
        text: 'Marker label ' + (this.markers.length + 1),
      },
      title: 'Marker title ' + (this.markers.length + 1),
      options: { animation: google.maps.Animation.BOUNCE },
    }) 
  }
}
