import { Cell } from "./Cell";
import { Direction } from "./DirectionEnum";

export class ExcelParameters{
    selected:boolean = false;
    userNameCell?:Cell;
    dayNameCell?:Cell;
    dateStartCell!:Cell;
    clockInCell?:Cell;
    clockOutCell?:Cell;
    minutesWorkedCell!:Cell;
    commentCell?:Cell;
    readDaysDirection:Direction = Direction.vertical;
}