import { ElementRef, VERSION, ViewChild } from '@angular/core';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detect-disease',
  templateUrl: './detect-disease.component.html',
  styleUrls: ['./detect-disease.component.css']
})
export class DetectDiseaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = 'Angular ' + VERSION.major;
  dataimage: any;

  //selecting the HTML input element
  @ViewChild('fileInput') fileInput!: ElementRef;
  
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

  

}
