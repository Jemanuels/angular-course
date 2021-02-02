import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'course-image',
  templateUrl: './course-image.component.html',
  styleUrls: ['./course-image.component.css']
})
export class CourseImageComponent implements OnInit, AfterViewInit {

  @Input('src')
  imageUrl: string;

  constructor() { }

  ngOnInit(): void {

    console.log(this.imageUrl);
  }

  ngAfterViewInit(){
    console.log(this.imageUrl);
  }

}
