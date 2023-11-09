import { Injectable } from '@angular/core';
import { ExcelParameters } from '../classes/models/ExcelParameters';
import { Cell } from '../classes/models/Cell';
import { Direction } from '../classes/models/DirectionEnum';
import readXlsxFile from 'read-excel-file';
import { WorkMonth } from '../classes/WorkMonth';
import { WorkDay } from '../classes/WorkDay';
import { User } from '../classes/User';

@Injectable({
  providedIn: 'root',
})
export class ExcelService {
  constructor() {}

  defaultParameters: ExcelParameters = {
    selected: true,
    userNameCell: new Cell(0, 2),
    dayNameCell: new Cell(1, 3),
    dateStartCell: new Cell(0, 3),
    clockInCell: new Cell(2, 3),
    clockOutCell: new Cell(3, 3),
    minutesWorkedCell: new Cell(4, 3),
    commentCell: new Cell(5, 3),
    readDaysDirection: Direction.vertical,
  };

  getParameters(): ExcelParameters[] {
    return [this.defaultParameters];
  }

  async getUserName(parameters: ExcelParameters, file: File) {
    let user;
    let rows = await readXlsxFile(file);
    if (parameters.userNameCell) {
      user = rows[parameters.userNameCell.y][parameters.userNameCell.x];
    }

    if (typeof user === 'string'){
      let split = user.split("Kullanıcı Adı: ");
      if(split.length>1) return split[1];
      else return split[0];
    }
    else return undefined;
  }

  async readExcel(file: File, parameters: ExcelParameters) {
    let month;
    let rows = await readXlsxFile(file);

    if (parameters.readDaysDirection == Direction.vertical) {
      month = this.createMonthVertical(rows, parameters);
    }

    return month;
  }

  createMonthVertical(rows: any[], parameters: ExcelParameters) {
    let month = new WorkMonth();
    const startingRow = parameters.dateStartCell?.y;

    let lastDay = new WorkDay();
    for (let i = startingRow; i < rows.length; i++) {
      const row = rows[i];

      const date = row[parameters.dateStartCell.x];

      if (lastDay.date.getTime() != date.getTime() || i == rows.length - 1) {
        if (lastDay.date.getTime() != new Date(0).getTime()) {
          month.addDay(lastDay);
        }

        i == rows.length - 1 ? lastDay : (lastDay = new WorkDay());

        lastDay.date = date;

        if (parameters.dayNameCell)
          lastDay.dayName = row[parameters.dayNameCell.x];
      }

      if (parameters.commentCell && row[parameters.commentCell.x])
        lastDay.comment = row[parameters.commentCell.x];

      if (parameters.clockInCell && parameters.clockOutCell) {
        lastDay.addPeriod(
          row[parameters.minutesWorkedCell.x],
          row[parameters.clockInCell.x],
          row[parameters.clockOutCell.x]
        );
      } else {
        lastDay.addPeriod(row[parameters.minutesWorkedCell.x]);
      }
    }
    month.calculateTotalMinutes();
    return month;
  }
}
