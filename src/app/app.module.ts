import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListViewComponent } from './course-list-view/course-list-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { CourseDetailsComponent } from './course-details/course-details.component';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { ExamFormComponent } from './exam-form/exam-form.component';
@NgModule({
  declarations: [
    AppComponent,
    CourseListViewComponent,
    CourseDetailsComponent,
    ExamFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatListModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
