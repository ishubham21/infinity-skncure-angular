import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare const Calendly: any;

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})

export class AppointmentsComponent implements OnInit {

  @ViewChild('appointmentCalendar') appointmentCalendar!: ElementRef

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    Calendly.initInlineWidget({
      url: 'https://calendly.com/infinity-doctors',
      parentElement: this.appointmentCalendar.nativeElement,
      prefill: {},
      utm: {}
    });
  }

}
