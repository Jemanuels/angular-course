import { AfterViewInit, ElementRef, ViewChild } from "@angular/core";
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

  @ViewChild("cardRef1", { read: ElementRef })
  card1: ElementRef;

  @ViewChild("cardRef2")
  card2: CourseCardComponent;

  @ViewChild("container")
  containerDiv: ElementRef;

  constructor() {
    console.log("containerDiv", this.card1);
  }

  onCourseSelected(course: Course) {}

  ngAfterViewInit() {
    console.log("containerDiv", this.card1);
  }
}
