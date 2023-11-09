import { WorkDay } from "./WorkDay";

export class WorkWeek {
  workDays: WorkDay[] = [];
  totalMinutes:number = 0;

  addWorkDay(day:WorkDay){
    this.workDays.push(day)
  }

  calculateTotalMinutes(){
    this.totalMinutes = 0;
    this.workDays.forEach((x)=>{
      this.totalMinutes += x.calculateTotalMinutes();
    })
    return this.totalMinutes;
  }

}
