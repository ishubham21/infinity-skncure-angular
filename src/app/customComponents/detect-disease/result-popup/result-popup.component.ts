import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-result-popup',
  templateUrl: './result-popup.component.html',
  styleUrls: ['./result-popup.component.css']
})
export class ResultPopupComponent implements OnInit {
  [x: string]: any;

  //injecting the data received from parent compontnt i.e. detect disease
  constructor(@Inject(MAT_DIALOG_DATA) public predictionData: any) { }

  ngOnInit(): void {
  }

}
