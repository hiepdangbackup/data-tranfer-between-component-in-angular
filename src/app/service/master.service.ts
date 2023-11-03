import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  // constructor(private http: HttpClient) {}
  // apiurl = 'https://localhost:8080/Employee';

  // GetAllEmployee() {
  //   return this.http.get(this.apiurl);
  // }

  constructor() {}

  listarray = [{ name: 'Ravi', mark: 75 }];

  GetData() {
    return this.listarray;
  }

  saveData(input: any) {
    this.listarray.push(input);
  }
}
