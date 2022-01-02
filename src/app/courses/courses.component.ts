import { Component, OnInit } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'] //,
  //providers: [CoursesService]
  //declare the service here in the intern providers if you want
  //a instance of him for this class.
})
export class CoursesComponent implements OnInit {

  courses: string[] = [];
  //coursesService: CoursesService;

  constructor(private coursesService: CoursesService) {
    //this.coursesService = new CoursesService();
    //this.coursesService = coursesService;
  }

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
    CoursesService.newCourseCreated.subscribe(
      course => this.courses.push(course)
    );
  }

}
