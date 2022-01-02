import { Component, OnInit } from '@angular/core';
import { CoursesService } from './../courses/courses.service';

@Component({
  selector: 'app-receive-created-course',
  templateUrl: './receive-created-course.component.html',
  styleUrls: ['./receive-created-course.component.css']
})
export class ReceiveCreatedCourseComponent implements OnInit {

  course: string = '';

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.coursesService.emitCreatedCourse.subscribe(
      createdCourse => this.course = createdCourse
    )
  }

}
