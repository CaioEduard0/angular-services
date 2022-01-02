import { CoursesService } from './../courses/courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
  providers: [CoursesService]
  //declare the service here in the intern providers if you want
  //a instance of him for this class.
})
export class CreateCourseComponent implements OnInit {

  courses: string[] = [];

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }

  onAddCourse(course: string) {
    this.coursesService.addCourse(course);
  }

}
