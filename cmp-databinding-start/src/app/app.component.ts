import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: "server", name: "Testserver", content: "Just a server"}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

}

// ngOnChanges - Called after a bound input property changes
// ngOnInit - Called once the component is initialized
// ngDoCheck - Called during every change detection run
// ngAfterContentInit - Called after content (ng-content) has been projected into view
// ngAfterContentChecked - Called every time the projected content has been checked
// ngAfterViewInit - Called after the component's view (and child views) have been initialized
// ngAfterViewChecked - Called evrey time the view (and child views) have been checked
// ngOnDestroy - Called once the component is about to be destroyed