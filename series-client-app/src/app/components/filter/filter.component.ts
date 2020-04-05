import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, filter, map, distinctUntilChanged } from 'rxjs/operators';
import { DataSeries } from 'src/app/models/list-series';
import { GetListService } from 'src/app/services/get-list.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @ViewChild('inputTag', { static: false }) public inputElem: ElementRef;

  public searchName: string;
  private response: DataSeries[];
  private changedResponse: DataSeries[];
  public listSeries: Array<DataSeries>;
  public listGenres: Array<string>;
  public listDates: Array<any>;
  public date: string | number;
  public genre: string;
  private firstCounter: number = 0;
  private secondCounter: number = 0;

  constructor (private getListService: GetListService) { }

  ngOnInit(): void {
    this.getListService.valueSeries.subscribe((data: Array<DataSeries>) => {
      this.listSeries = data;
      this.filterListGenres(this.listSeries);
      this.filterListDates(this.listSeries);
    });
  }

  public ngAfterViewInit(): void {
    fromEvent(this.inputElem.nativeElement, 'keyup')
      .pipe(
        debounceTime(700),
        map((event: InputEvent) => (<HTMLInputElement>event.target).value),
        filter(value => value.length > 2 || value.length === 0),
        distinctUntilChanged(),
      )
      .subscribe(value => {
        this.filterName(value);
      });
  }

  private filterName(value: string) {
    this.response = this.getListService.getResponse();
    if (!value) {
      this.changedResponse = this.response;
    } else {
      this.changedResponse = this.response.filter(
        (el) => el.name.toLowerCase().indexOf(value.toLowerCase()) >= 0
      );
    }
    this.getListService.transferData(this.changedResponse);
  }

  private filterListGenres(value: Array<DataSeries>) {
    if (this.firstCounter > 1) return;
    let arrGenres: Array<string> = [ "Genre..."];
    value.map(el => el.genre.map(item => arrGenres.push(item)));
    this.listGenres = Array.from(new Set(arrGenres));
    this.firstCounter++;
  }

  private filterListDates(value: Array<DataSeries>) {
    if (this.secondCounter > 1) return;
    let arrDates: Array<any> = [];
    value.map(el => arrDates.push(Number(el.premiere.slice(-4))));
    arrDates.sort((a, b) => a - b);
    this.listDates = Array.from(new Set(arrDates));
    this.listDates.unshift("Date...");
    this.secondCounter++;
  }

  public filterGenre(value: string) {
    this.response = this.getListService.getResponse();
    if (value === "Genre...") {
      this.changedResponse = this.response;
    } else {
      this.changedResponse = this.response.filter(
        (el) => el.genre.indexOf(value) >= 0
      );
    }
    this.getListService.transferData(this.changedResponse);
  }

  public filterDate(value: string) {
    this.response = this.getListService.getResponse();
    if (value === "Date...") {
      this.changedResponse = this.response;
    } else {
      this.changedResponse = this.response.filter(
        (el) => el.premiere.indexOf(value) >= 0
      );
    }
    this.getListService.transferData(this.changedResponse);
  }

}
