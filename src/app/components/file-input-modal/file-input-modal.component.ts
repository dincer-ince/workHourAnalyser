import { Component, EventEmitter } from '@angular/core';
import { User } from 'src/app/classes/User';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-file-input-modal',
  templateUrl: './file-input-modal.component.html',
  styleUrls: ['./file-input-modal.component.css']
})
export class FileInputModalComponent {
  constructor(private excelService:ExcelService){}
  newUser:EventEmitter<User> = new EventEmitter();

  onDragDrop(files:FileList | undefined){
    console.log(files);
  }

  async onFileChange(event:any){
    const files:File[] = event.target.files;
    const parameters = this.excelService.getParameters()[0];
    //TODO: Verification
    const month =await this.excelService.readExcel(files[0],parameters);
    const userName = await this.excelService.getUserName(parameters,files[0]);
    if(month){
      this.newUser.emit({userName:userName,workMonths:[month]});
    }
    
  }
}
