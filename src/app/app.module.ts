import { LogService } from './shared/log.service';
import { CoursesModule } from './courses/courses.module';
import { CoursesService } from './courses/courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCourseModule } from './create-course/create-course.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CreateCourseModule,
    CoursesModule
  ],
  //if you want that service have scope to whole application,
  //then you have to declare him here in the appModule (Main module of application)
  providers: [
    CoursesService,
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
