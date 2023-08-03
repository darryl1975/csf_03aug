import { QueryList, ViewChildren } from '@angular/core';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css']
})
export class ElementsComponent implements OnInit {
  @ViewChild("domParagraph1", {static : true}) myParagraphElement: ElementRef;

  categories = [];

  @ViewChildren('itemList') items: QueryList<string>;

  ngOnInit() : void {
    this.myParagraphElement.nativeElement.innerHTML = "Its 1145am already."

    this.categories = [
      { value: 'Angular'},
      { value: 'Vue'},
      { value: 'React'}
    ]
  }

  ngAfterViewInit() : void {
    console.log(this.myParagraphElement);
  }

  getCategory(event, category, i) {
    console.log('Event: ' + event);
    console.log('Category: ' + JSON.stringify(category));
    console.log('Index: ' + i);
    console.log('itemList: ' + JSON.stringify(this.items));
  }
}
