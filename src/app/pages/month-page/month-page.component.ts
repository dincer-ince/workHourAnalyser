import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkMonth } from 'src/app/classes/WorkMonth';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-month-page',
  templateUrl: './month-page.component.html',
  styleUrls: ['./month-page.component.css']
})
export class MonthPageComponent {
  constructor(public dataService:DataService){}

  month:Observable<WorkMonth | undefined> = this.dataService.activeMonth;

}
