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

  labels = [
    '21 April',
    '22 April',
    '23 April',
    '24 April',
    '25 April',
    '26 April',
    '28 April',
    '29 April',
  ];

  // STATIC DATA FOR THE CHART IN JSON FORMAT.
  chartData = [
    {
      label: 'Acne',
      data: [100, 90, 80, 0, 60, 50, 40, 30, 20],
    },
    {
      label: 'Cutaneous Horn',
      data: [80, 90, 70, 0, 100, 70, 90, 20, 20],
    }
  ];

  // CHART COLOR.
  colors = [
    {
      // 1st Year.
      backgroundColor: 'rgba(77,83,96,0.2)',
    },
    {
      // 2nd Year.
      backgroundColor: '#6794ef',
    },
  ];

  // CHART CLICK EVENT.
  onChartClick(event: any) {
    console.log(event);
  }

  ngOnInit(): void {
    console.log(this.trackerService.gettingTrackerData());
  }
}
