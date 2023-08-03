import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

// ngOnChange --> ngOnInit --> doCheck --> AfterContentInit --> --> AfterContentChecked --> AfterViewInit --> AfterViewChecked --> Destroy

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  count : number = 0;
  fullName: string = '';

  interval : any;

  ngOnInit(): void {
    console.log('Interval component OnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Interval component OnChange');
  }

  ngDoCheck(): void {
    console.log('Interval component DoCheck');
  }

  ngAfterContentInit(): void {
    console.log('Interval component AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('Interval component AfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('Interval component AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('Interval component AfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('Interval component OnDestroy');
    this.startCount();
  }

  onChange() {
    console.log('onChange called');
  }

  startCount() {
    this.interval = setInterval(() => {
      // write what you want to perform here
      this.count++;
    }, 1000);
  }

  stopCount() {
    clearInterval(this.interval);
  }
}
