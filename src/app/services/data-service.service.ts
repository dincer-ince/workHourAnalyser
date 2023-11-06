import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';
import { WorkMonth } from '../classes/WorkMonth';
import { User } from '../classes/User';
import { MatDialog } from '@angular/material/dialog';
import { FileInputModalComponent } from '../components/file-input-modal/file-input-modal.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _user: BehaviorSubject<User> = new BehaviorSubject(new User());

  activeMonth: Observable<WorkMonth | undefined> = this._user.pipe(
    map((user) => {
      for (let i = 0; i < user.workMonths.length; i++) {
        const month = user.workMonths[i];
        if (month.active) return month;
      }
      const month = user.workMonths.at(-1);
      if(month) month.active = true;
      return month;
    })
  );

  userName: Observable<string | undefined> = this._user.pipe(
    map((x) => x.userName)
  );

  requiredMinutes:BehaviorSubject<number>= new BehaviorSubject(450);

  private User: User = {
    workMonths: [],
  };

  constructor(private dialogService: MatDialog) {
    const userStr = localStorage.getItem('user');
    if (!userStr) {
      this.initUser();
      return;
    }

    const user = JSON.parse(userStr);
    this._user.next(user);

  }

  initUser() {
    const dialogRef = this.dialogService.open(FileInputModalComponent);
    dialogRef.componentInstance.newUser.subscribe((x) => {
      localStorage.setItem("user",JSON.stringify(x))
      this._user.next(x);
      dialogRef.close();
    });
  }


}
