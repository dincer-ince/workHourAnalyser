import { WorkPeriod } from './WorkPeriods';

export class WorkDay {
  workPeriods: WorkPeriod[] = [];
  totalMinutes: number = 0;
  comment?: string;
  dayName?: string = '';
  date: Date = new Date(0);

  addPeriod(minutes: Date, clockIn?: string | null, clockOut?: string | null) {
    let actualMinutes =(minutes.getTime()- (-2209161600000)) / 1000 /60;
    
    if(actualMinutes == 0) return;

    let period = new WorkPeriod();
    if (clockIn) period.clockIn = clockIn;
    if (clockOut) period.clockOut = clockOut;
    period.minutesWorked = actualMinutes;
    this.workPeriods.push(period);
    this.totalMinutes += actualMinutes;
  }

  calculateTotalMinutes(){
    this.totalMinutes = 0;
    this.workPeriods.forEach(x=>{
      this.totalMinutes +=x.minutesWorked;
    })
    return this.totalMinutes;
  }
}
