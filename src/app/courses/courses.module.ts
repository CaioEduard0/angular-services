//import { CoursesService } from './courses.service';
import { NgModule } from '@angular/core';

import { CoursesComponent } from './courses.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CoursesComponent
  ]//,
  // providers: [
  //   CoursesService
  // ]
})
export class CoursesModule { }
