import { Component, Input } from '@angular/core';
import { map } from 'rxjs';
import { WorkWeek } from 'src/app/classes/WorkWeek';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent {

  constructor(public dataService:DataService){}
  @Input() weekNumber:number = 0;
  @Input() week!:WorkWeek;

  requiredMinutes = this.dataService.requiredMinutes.pipe(map(x=>{
    return x* this.week.workDays.length;
  }))

  difference = this.requiredMinutes.pipe(map(x=>{
    let str = "";

    const diff = this.week.totalMinutes-x;
    const abs = Math.abs(diff);

    if(diff<0) str += "-";

    if(abs/60 > 1) str += Math.floor(abs/60) + ":";
    else str+= "00:"

    if(abs%60 ==0) str += "00";
    else if(abs%60 <10) str +="0" +  abs%60 ;
    else str+= abs%60

    return str;
  }))

}
