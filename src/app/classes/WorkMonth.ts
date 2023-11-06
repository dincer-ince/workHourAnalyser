import { WorkDay } from './WorkDay';
import { WorkWeek } from './WorkWeek';

export class WorkMonth {
  active:boolean = false;
  workWeeks: WorkWeek[] = [];
  totalMinutes: Date = new Date(0);
  nameMonth: number = 0;

  addDay(workDay: WorkDay) {
    if( [0,6].includes(workDay.date.getDay())) return;
    if (workDay.date.getDay() == 1) {
      this.workWeeks.push(new WorkWeek());
      this.nameMonth = workDay.date.getMonth();
    }

    if (this.workWeeks.length == 0) {
      this.workWeeks.push(new WorkWeek());
    }

    this.workWeeks.at(-1)?.addWorkDay(workDay);
  }
}
