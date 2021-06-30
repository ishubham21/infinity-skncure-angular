import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as p5 from 'p5';
import { AuthService } from '../../services/auth/auth.service';


//declaring ml5 to use its functions
declare const ml5: any;

@Component({
  selector: 'app-real-time-detection',
  templateUrl: './real-time-detection.component.html',
  styleUrls: ['./real-time-detection.component.css'],
})
export class RealTimeDetectionComponent implements OnInit {
  @ViewChild('classificationCanvas') classificationCanvas!: ElementRef;

  //variables to be used by p5.js
  video: any;
  classifier: any;
  label: string = 'Waiting...';
  constraints: any = {
    video: { mandatory: { minWidth: 500, minHeight: 500 } },
  };

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    //callback function that prints results for each frame got from classifyVideo()
    const gotResults = (error: any, results: any) => {
      if (error) {
        console.error(error);
        return;
      }

      // Store the label and classify again! - Infinite loop here
      this.label = results[0].label;
      classifyVideo();
    };

    //function to classify the frames and get results
    const classifyVideo = () => {
      this.classifier.classify(this.video, gotResults);
    };

    //function to sketch the video on canvas
    const sketch = (p5: any) => {
      //preloading the ML model before the canvas loads
      p5.preload = () => {
        //model
        this.classifier = ml5.imageClassifier(
          'assets/model/skin-diseases/' + 'model.json'
        );
      };

      p5.setup = () => {
        //a canvas which would fit the video for results
        p5.createCanvas(640, 520);

        // Create the video - using the webcam
        this.video = p5.createCapture(this.constraints);
        this.video.size(640, 520);
        this.video.hide();

        classifyVideo();
      };

      //function to draw the canvas
      p5.draw = () => {
        p5.background(255);
        p5.rect(100, 100, 100, 100);
        p5.background(0);

        // Draw the video
        p5.image(this.video, 0, 0, 640, 520);

        // STEP 4: Draw the label
        p5.textSize(32);

        // p5.textAlign(CENTER,CENTER)

        p5.fill(255);
        p5.text(this.label, 230, 480);
      };
    };

    //sending all the constrains & function to p5 module
    if (this.classificationCanvas.nativeElement) {
      let canvas;

      //to prevent multiple canvas formation
      if (!canvas) {
        canvas = new p5(sketch, this.classificationCanvas.nativeElement);
      }
    }
  }

  ngOnDestroy() {
    this.classificationCanvas.nativeElement.remove();
  }
}
