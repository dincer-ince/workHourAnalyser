import { WorkDay } from "./WorkDay";

export class WorkWeek {
  workDays: WorkDay[] = [];
  totalMinutes:number = 0;

  addWorkDay(day:WorkDay){
    this.workDays.push(day)
    this.totalMinutes+=day.totalMinutes;
  }
}
