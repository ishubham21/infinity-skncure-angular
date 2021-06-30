import { Component, OnInit } from '@angular/core';
import { TrackerService } from 'src/app/services/tracker/tracker.service';

@Component({
  selector: 'app-disease-tracker',
  templateUrl: './disease-tracker.component.html',
  styleUrls: ['./disease-tracker.component.css'],
})
export class DiseaseTrackerComponent implements OnInit {
  constructor(private trackerService: TrackerService) {}

  // ADD CHART OPTIONS.
  chartOptions = {
    responsive: true, // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  };

  labels: any = [];

  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  chartData: any = [];

  // CHART COLOR.
  colors: any = [];

  // CHART CLICK EVENT.
  onChartClick(event: any) {
    console.log(event);
  }

  ngOnInit(): void {
    this.getCalenderWeek();
    this.getData();
  }

  getCalenderWeek() {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let result = [];
    /** Creating date for today and past 6 days */
    for (let i = 6; i >= 0; i--) {
      let d = new Date();
      d.setDate(d.getDate() - i);
      result.push(d.getDate() + ' ' + monthNames[d.getMonth()]);
    }
    this.labels = result;
  }

  getData() {
    this.trackerService.gettingTrackerData().subscribe((doc) => {
      /** Checking if data is available */
      if (doc.length !== 0) {
        let uniqueDiseases = Object.values(
          doc[0].illness
            .map((item: any) => item.name)
            .filter(
              (value: any, index: any, self: any) =>
                self.indexOf(value) === index
            )
        );

        /** Generating color for disease */
        this.colors = [];
        uniqueDiseases.forEach((element) => {
          let _obj = {
            backgroundColor:
              '#' + Math.floor(Math.random() * 16777215).toString(16),
          };
          this.colors.push(_obj);
        });

        /** Looping into each disease */
        this.chartData = [];
        uniqueDiseases.forEach((disease) => {
          var _obj: any = {
            label: disease,
            data: [],
          };

          /** Checking disease matches with current label */
          this.labels.forEach((element: any) => {
            let data: any = doc[0].illness.filter(
              (x: any) => x.name == disease && x.createdAt == element
            );
            if (data.length > 0) {
              /** Pushing prediction */
              _obj.data.push(parseInt(data[0].prediction));
            } else {
              /** Pushing 0 if data isn't present */
              _obj.data.push(0);
            }
          });
          this.chartData.push(_obj);
        });
      }
    });
  }
}
