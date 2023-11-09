import { WorkDay } from './WorkDay';
import { WorkWeek } from './WorkWeek';

export class WorkMonth {
  active:boolean = false;
  workWeeks: WorkWeek[] = [];
  totalMinutes:number =0;
  nameMonth: Date = new Date();
  daysWorked:number = 0;

  addDay(workDay: WorkDay) {
    if( [0,6].includes(workDay.date.getDay())) return;
    if (workDay.date.getDay() == 1) {
      this.workWeeks.push(new WorkWeek());
      
    }

    if (this.workWeeks.length == 0) {
      this.workWeeks.push(new WorkWeek());
      this.nameMonth = workDay.date
    }

    this.workWeeks.at(-1)?.addWorkDay(workDay);
  }

  calculateTotalMinutes(){
    this.totalMinutes = 0;
    this.daysWorked = 0;
    this.workWeeks.forEach((x)=>{
      this.totalMinutes += x.calculateTotalMinutes();
      this.daysWorked += x.workDays.length;
    })
  }
}
