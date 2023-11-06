import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonthPageComponent } from './pages/month-page/month-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FileInputModalComponent } from './components/file-input-modal/file-input-modal.component';
import { FileDragDropDirective } from './directives/file-drag-drop.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { WeekComponent } from './components/week/week.component';
import { DayComponent } from './components/day/day.component';

@NgModule({
  declarations: [
    AppComponent,
    MonthPageComponent,
    HomePageComponent,
    FileInputModalComponent,
    FileDragDropDirective,
    WeekComponent,
    DayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
