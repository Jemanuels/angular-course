import { ElementRef, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

 @ViewChild('cardRef1', {read: ElementRef})
  card1: ElementRef;

  @ViewChild('cardRef2')
  card2: CourseCardComponent;

  @ViewChild('container')
  containerDiv: ElementRef;

  onCourseSelected(course: Course){
    console.log(this.card1);
    console.log(this.card2);

    console.log('containerDiv', this.containerDiv);
    
  }

}
