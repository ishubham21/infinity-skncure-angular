import { ElementRef, EventEmitter, VERSION, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TrackerService } from 'src/app/services/tracker/tracker.service';
import { ResultPopupComponent } from './result-popup/result-popup.component';

declare const ml5: any;

@Component({
  selector: 'app-detect-disease',
  templateUrl: './detect-disease.component.html',
  styleUrls: ['./detect-disease.component.css'],
})
export class DetectDiseaseComponent implements OnInit {
  //event emitter to predict results
  public predictEvt!: EventEmitter<void>;

  //classifier varaible that loads the model
  classifier: any;

  //confidence and label of the prediction
  confidenceOnDisease: any;
  labelOfDisease: any;

  constructor(
    public dialog: MatDialog,
    private trackerService: TrackerService
  ) {
    //creating an instance of predictEvt event emitter - continued in ngAfterViewInit()
    this.predictEvt = new EventEmitter<void>();
  }

  ngOnInit(): void {
    //loading model on init
    this.classifier = ml5.imageClassifier(
      'assets/model/skin-diseases/' + 'model.json'
    );
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
        image.onload = (rs) => {
          let imgBase64Path = e.target.result;
          this.dataimage = imgBase64Path;
        };
      };

      //reading as dataURL - to be called after creating a reader
      reader.readAsDataURL(imgFile.target.files[0]);

      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = '';
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
        //ml5 function to classify the image - takes the image element and a callback function
      let dialogRef = this.dialog.open(ResultPopupComponent, {
        data: null
      });
        await this.classifier.classify(this.previewImg.nativeElement, (error: any, results: any) => {
            if (error) {
              console.error(error);
              return;
            }

            //setting the values to be transferred to the dialog
            this.confidenceOnDisease = (results[0].confidence * 100).toFixed(2);
            this.labelOfDisease = results[0].label;

            //if dialog reference exists, update the predictionData element which is present in the popup
            if(dialogRef && dialogRef.componentInstance){
              dialogRef.componentInstance.predictionData = {
                disease: this.labelOfDisease.toUpperCase(),
                confidence: this.confidenceOnDisease
              }
            }

            dialogRef.afterClosed().subscribe((result) => {
              if (result) {
                this.trackerService.addingDisease(
                  this.labelOfDisease,
                  this.confidenceOnDisease
                );
              }
            });
          }
        );
      },
      (err: Error) => console.error(err)
    ); //log errors if any
  }
}
