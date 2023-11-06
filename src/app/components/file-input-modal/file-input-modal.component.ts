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

  async onDragDrop(files:FileList | undefined){
    if(!files) return;
    await this.parseFile(files.item(0)!);
  }

  async onFileChange(event:any){
    const files:File[] = event.target.files;
   
    await this.parseFile(files[0])
  }

  async parseFile(file:File){
    const parameters = this.excelService.getParameters()[0];
    //TODO: Verification
    const month =await this.excelService.readExcel(file,parameters);
    const userName = await this.excelService.getUserName(parameters,file);
    if(month){
      this.newUser.emit({userName:userName,workMonths:[month]});
    }
  }

}
