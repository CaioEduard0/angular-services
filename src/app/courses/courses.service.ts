import { LogService } from './../shared/log.service';
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class CoursesService {

    emitCreatedCourse = new EventEmitter<string>();
    static newCourseCreated = new EventEmitter<string>();

    private courses: string[] = ['Angular', 'Java', 'Quarkus'];

    constructor(private logService: LogService) {
        console.log('CoursesService');     
    }

    getCourses() {
        this.logService.consoleLog('Having courses list.');
        return this.courses;
    }

    addCourse(course: string) {
        this.logService.consoleLog(`Creating a new course: ${course}`);
        this.courses.push(course);
        this.emitCreatedCourse.emit(course);
        CoursesService.newCourseCreated.emit(course);
    }
}