import { Component } from "@angular/core";
import { DataStorageService } from "../services/data-storage.service";
import { Recipe } from "../models/recipe.model";
import { Z_DATA_ERROR } from "zlib";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService) {}

  onUpdateData(data: any) {
    this.dataStorageService
      .updateData(data)
      .subscribe(
        (response: Response) => console.log(response),
        (error: Response) => console.log(error)
      );
  }

  onCreateData(data: any) {
    this.dataStorageService
      .createData(data)
      .subscribe(
        (response: Response) => console.log(response),
        (error: Response) => console.log(error)
      );
  }

  onFetchData() {
    this.dataStorageService
      .fetchData()
      .subscribe(
        (response: Response) => console.log(response),
        (error: Response) => console.log(error)
      );
  }

  onDeleteData(id: number) {
    this.dataStorageService
      .deleteData(id)
      .subscribe(
        (response: Response) => console.log(response),
        (error: Response) => console.log(error)
      );
  }
}
