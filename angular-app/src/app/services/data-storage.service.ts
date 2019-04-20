import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "./recipe.service";
@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  updateData(data: any) {
    let headers = new HttpHeaders({ "content-type": "application/json" });
    let url = `http://domain.com/path?query=true`;
    return this.http.put(url, data, { headers: headers });
  }

  fetchData() {
    let headers = new HttpHeaders({ "content-type": "application/json" });
    let url = `http://domain.com/path?query=true`;
    return this.http.get(url, { headers: headers });
  }

  createData(data: any) {
    let headers = new HttpHeaders({ "content-type": "application/json" });
    let url = `http://domain.com/path?query=true`;
    return this.http.post(url, data, { headers: headers });
  }

  deleteData(id: number) {
    let headers = new HttpHeaders({ "content-type": "application/json" });
    let url = `http://domain.com/${id}`;
    return this.http.delete(url, { headers: headers });
  }
}
