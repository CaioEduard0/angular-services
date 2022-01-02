//import { CoursesService } from '../courses/courses.service';
import { NgModule } from '@angular/core';

import { CreateCourseComponent } from './create-course.component';
import { CommonModule } from '@angular/common';
import { ReceiveCreatedCourseComponent } from '../receive-created-course/receive-created-course.component';

@NgModule({
  declarations: [
    CreateCourseComponent,
    ReceiveCreatedCourseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreateCourseComponent
  ],//
  // providers: [
  //   CoursesService
  // ]
})
export class CreateCourseModule { }
