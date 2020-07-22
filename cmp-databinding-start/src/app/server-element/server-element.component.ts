import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input() element: {type: string, name: string, content: string};

  constructor() {
    console.log("Constructor called!")
  }

  // ngOnChanges - Called after a bound input property changes
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    console.log("ngOnChanges called!")
  }

  // ngOnInit - Called once the component is initialized
  ngOnInit(): void {
    console.log("ngOnInit called!")
  }

  // ngDoCheck - Called during every change detection run
  ngDoCheck() {
    console.log("ngDoCheck called!")
  }

  // ngAfterContentInit - Called after content (ng-content) has been projected into view
  ngAfterContentInit() {
    console.log("ngAfterContentInit called!")
  }

  // ngAfterContentChecked - Called every time the projected content has been checked
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called!")
  }
v
  // ngAfterViewInit - Called after the component's view (and child views) have been initialized
  ngAfterViewInit() {
    console.log("ngAfterViewInit called!")
  }

  // ngAfterViewChecked - Called evrey time the view (and child views) have been checked
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called!")
  }

  // ngOnDestroy - Called once the component is about to be destroyed
  ngOnDestroy() {
    console.log("ngOnDestroy called!")
  }

}