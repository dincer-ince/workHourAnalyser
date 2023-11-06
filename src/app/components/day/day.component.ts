import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { WorkDay } from 'src/app/classes/WorkDay';
import { DataService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  @Input() day!:WorkDay

  minutesStr:string= "";

  constructor(public dataService:DataService){
    
  }

  ngOnInit(): void {
    this.minutesStr = this.formatTime(this.day.totalMinutes)
  }

  percentage = this.dataService.requiredMinutes.pipe(map(x=>{
    const temp = Math.min((this.day.totalMinutes/x *100) -20,100);
    console.log(temp + "   " + this.day.totalMinutes + "   " + x)
    return temp
  }))


  formatTime(minutes:number){
    let str = "";

    const diff = minutes
    const abs = Math.abs(diff);

    if(diff<0) str += "-";

    if(abs/60 > 1) str += Math.floor(abs/60) + ":";
    else str+= "00:"

    if(abs%60 ==0) str += "00";
    else if(abs%60 <10) str +="0" +  abs%60 ;
    else str+= abs%60
    
    return str;
  }
  

}
