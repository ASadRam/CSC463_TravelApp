import { Component, OnInit, DoCheck, Input, OnDestroy, AfterContentChecked, AfterContentInit,
  AfterViewChecked, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() host: string;

  constructor() {
    console.log('constructor: ' + this.host);
  }

  ngOnInit(): void {
    console.log('ngOnInit: ' + this.host);
  }

  environment = 'macOS: 10.15.7';
  ide = 'VS Code Version: 1.50.1';

  ngDoCheck(): void {
    console.log('ngDoCheck: ' + this.host);
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: ' + this.host);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked: ' + this.host);
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: ' + this.host);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: ' + this.host);
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy: ' + this.host);
  }

}
