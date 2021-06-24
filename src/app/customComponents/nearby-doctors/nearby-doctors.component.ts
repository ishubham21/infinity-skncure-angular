import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-nearby-doctors',
  templateUrl: './nearby-doctors.component.html',
  styleUrls: ['./nearby-doctors.component.css']
})
export class NearbyDoctorsComponent implements OnInit {

  markers: any = [{ position: { lat: 0, lng: 0 }, label: { color: '', text: ''}, title: '', options: { animation: ''} }]

  zoom = 16
  center: any
  options: google.maps.MapOptions = {
    maxZoom: 25,
    minZoom: 8,
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {  }

  //calling Google Maps API
  getData = (url: any) => {
      const headers = { 'mode': 'no-cors' }
      return this.http.get(url, {headers})
  }

  ngAfterViewInit(){
    //if geolocation permissions are granted
    if ('geolocation' in navigator) {

      //using HTML's navigator API to get the current location 
      navigator.geolocation.getCurrentPosition((position) => {

        //centering the map around the user's location
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }

        //adding marker on the user's location
        this.markers.push({ position: { lat: position.coords.latitude, lng: position.coords.longitude }, label: { color: 'red', text: 'Your Location' }, options: { animation: google.maps.Animation.BOUNCE } })

        //url for API call
        let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${position.coords.latitude},${position.coords.longitude}&radius=2000&type=doctor&keyword=dermatologist&key=AIzaSyCP4WQ-ez8SLvioMAVpEVuY9ctWdDOJ6n4`

        
        this.getData(url).subscribe(data => {
          console.log(data);
          
        })


      }, (err) => {
        alert('Some error occured' + err)
      })

    }
    //if permissions are not granted
    else {
      alert('Please turn on your location!')
    }
  }

}
