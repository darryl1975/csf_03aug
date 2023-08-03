import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'csf_03aug';
  cards: any[] = [{
    title: 'First Title',
    body: 'first Title Body Content'
  },
  {
    title: 'First Title 2',
    body: 'first Title 2 Body Content'
  }
  ]


  btnClicked(event: any) {
    console.log(event);
  }
}
