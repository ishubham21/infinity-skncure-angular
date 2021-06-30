import { ElementRef, EventEmitter, VERSION, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogPopupComponent } from './dialog-popup/dialog-popup.component';

declare const ml5: any

@Component({
  selector: 'app-dark-circles',
  templateUrl: './dark-circles.component.html',
  styleUrls: ['./dark-circles.component.css']
})
export class DarkCirclesComponent implements OnInit {

  //event emitter to predict results
  public predictEvt!: EventEmitter<void>;

  //classifier varaible that loads the model
  classifier: any

  //confidence and label of the prediction
  confidenceOnPrediction: any
  labelOfPrediction: any

  constructor(public dialog: MatDialog) {

    //creating an instance of predictEvt event emitter - continued in ngAfterViewInit()
    this.predictEvt = new EventEmitter<void>();
  }

  ngOnInit(): void {
    //loading model on init
    this.classifier = ml5.imageClassifier('assets/model/dark-circles/' + 'model.json')
  }

  name = 'Angular ' + VERSION.major;
  dataimage: any;

  //selecting the HTML input element
  @ViewChild('fileInput') fileInput!: ElementRef;

  @ViewChild('previewImg') previewImg!: ElementRef;

  //fileAttr is the name of the file to be displayed
  fileAttr = 'Choose File';

  //called when input is changed - ie. an image is uploaded
  //imgFile is the $event passed from the html file
  uploadFileEvt(imgFile: any) {

    //if the image exists
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';

      //appending the name of the file to fileAttr for display 
      Array.from(imgFile.target.files).forEach((file: any) => {
        this.fileAttr += file.name;
      });

      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;

        //image reader onload
        image.onload = rs => {
          let imgBase64Path = e.target.result;
          this.dataimage = imgBase64Path;
        };

      };

      //reading as dataURL - to be called after creating a reader
      reader.readAsDataURL(imgFile.target.files[0]);

      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = "";
    }

    //if image not found
    else {
      this.fileAttr = 'Choose File';
    }
  }

  ngAfterViewInit() {

    //emitting the prdictEvt event
    this.predictEvt.emit();

    //subscribing to the changes produced - button click in this case
    this.predictEvt.subscribe(async () => {

      let dialogRef = this.dialog.open(DialogPopupComponent, {
        data: null
      });

      //ml5 function to classify the image - takes the image element and a callback function
      await this.classifier.classify(this.previewImg.nativeElement, (error: any, results: any) => {
        if (error) {
          console.error(error)
          return
        }

        //setting tha values to be transferred to the dialog 
        this.confidenceOnPrediction = (results[0].confidence * 100).toFixed(2)
        this.labelOfPrediction = results[0].label

        //if dialog reference exists, update the predictionData element which is present in the popup
        if (dialogRef && dialogRef.componentInstance) {
          dialogRef.componentInstance.predictionData = {
            disease: this.labelOfPrediction.toUpperCase(),
            confidence: this.confidenceOnPrediction
          }
        }
        dialogRef.afterClosed().subscribe(result => {
          
        })

      })
    }, (err: Error) => console.error(err)) //log errors if any
  }

}
