import { AfterViewInit, Component, ContentChild, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import { CourseImageComponent } from '../course-image/course-image.component';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit {
  
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent)
  image;

  constructor() { }

  ngOnInit(): void {
  }

  get isImageVisible(){
    return this.course && this.course.iconUrl;
  }

  onCourseViewed(){
    
    this.courseSelected.emit(this.course);
  }

  cardClasses(){

    if(this.course.category == 'BEGINNER'){
      return 'beginner';
    }
  }

  cardStyles(){
    return {'background-image': 'url(' + this.course.iconUrl + ')'};
  }

  ngAfterViewInit(){
    console.log(this.image);
  }

}
