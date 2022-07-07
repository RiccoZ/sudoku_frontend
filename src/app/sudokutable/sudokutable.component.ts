import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-sudokutable',
  templateUrl: './sudokutable.component.html',
  styleUrls: ['./sudokutable.component.scss']
})
export class SudokutableComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  public sudoku = [
    [5,3,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,1,7,9],
  ];

  inputfilter(id: string) {
    const input = document.getElementById(id) as HTMLInputElement;
    let inpNumb = Number(input.value);
    if(inpNumb > 9 || inpNumb < 1) {
      input.value = '';
    }
  }


  public get() {
    this._httpService.testGet(this.getSudoku()).subscribe(data => {
      console.log(data);
    });
  }

  public getSudoku() {
    for(let i = 0; i < this.sudoku.length; i++) {
      for(let z = 0; z < this.sudoku.length; z++) {
        let pos = z + (i*9);
        this.sudoku[i][z] = Number((<HTMLInputElement>document.getElementById('input' + pos)).value);
      }
    }

    return this.sudoku.toString();
  }


  ngOnInit(): void {
  }

}
