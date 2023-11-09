import { Component } from '@angular/core';
import { Observable, combineLatestWith, map } from 'rxjs';
import { WorkMonth } from 'src/app/classes/WorkMonth';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-month-page',
  templateUrl: './month-page.component.html',
  styleUrls: ['./month-page.component.css'],
})
export class MonthPageComponent {
  constructor(public dataService: DataService) {}

  month: Observable<WorkMonth | undefined> = this.dataService.activeMonth;

  

  difference = this.month.pipe(
    combineLatestWith(this.dataService.requiredMinutes),
    map((x) => {
      const month = x[0];
      if (!month) return '';
      const requiredMinutes = x[1] * month.daysWorked;

      let str = '';

      const diff = month.totalMinutes - requiredMinutes;
      const abs = Math.abs(diff);

      if (diff < 0) str += '-';

      if (abs / 60 > 1) str += Math.floor(abs / 60) + ':';
      else str += '00:';

      if (abs % 60 == 0) str += '00';
      else if (abs % 60 < 10) str += '0' + (abs % 60);
      else str += abs % 60;

      return str;
    })
  );
}
