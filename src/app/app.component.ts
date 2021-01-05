import { AfterViewInit, ElementRef, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { Component } from "@angular/core";
import { COURSES } from "../db-data";
import { CourseCardComponent } from "./course-card/course-card.component";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;

  @ViewChildren(CourseCardComponent, {read: ElementRef})
  cards: QueryList<ElementRef>;

  @ViewChild("cardRef2")
  card2: CourseCardComponent;

  @ViewChild("container")
  containerDiv: ElementRef;

  constructor() {
    console.log("containerDiv", this.cards);
  }

  onCourseSelected(course: Course) {
    console.log("containerDiv", this.cards);
  }

  ngAfterViewInit() {
    this.cards.changes.subscribe(
      cards => console.log(cards)
    );

    console.log("containerDiv", this.cards.first);
  }

  onCoursesEdited(){
    this.courses.push(
      {
        id: 11,
        description: "Angular core deep dive",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        category: 'INTERMEDIATE',
        lessonsCount: 10
    }
    )
  }
}
