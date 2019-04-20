import { NgModule } from "@angular/core";
import { DropDownDirective } from "../directives/dropdown.directive";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [DropDownDirective],
  exports: [CommonModule, DropDownDirective]
})
export class SharedDirectiveModule {}
