import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileInputModalComponent } from './file-input-modal.component';

describe('FileInputModalComponent', () => {
  let component: FileInputModalComponent;
  let fixture: ComponentFixture<FileInputModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileInputModalComponent]
    });
    fixture = TestBed.createComponent(FileInputModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
