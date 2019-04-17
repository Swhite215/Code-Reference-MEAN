import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding("style.backgroundColor") backgroundColor: string = "transparent";
  @Input() defaultColor: string = "transparent";
  @Input() highlightColor: string = "blue";

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "backgroundColor",
    //   "blue"
    // );
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "backgroundColor",
      "blue"
    );
    //HostBinding - this.backgroundColor = "blue";
    //HostBinding w/ Input - this.backgroundColor = highlightColor;
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "backgroundColor",
      "transparent"
    );

    //HostBinding - this.backgroundColor = "transparent";
    //HostBinding w/Input - this.backgroundColor = "transparent";
  }
}
