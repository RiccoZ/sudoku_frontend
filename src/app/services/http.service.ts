import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url = 'http://localhost:8080/getsudoku';

  constructor(private http: HttpClient) {

  }

  testGet(sudokustring: string) {

    let httpParams = new HttpParams().set('Sudoku', sudokustring);

    return this.http.get(this.url, { responseType: 'text', params: httpParams});
  }
}
