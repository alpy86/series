import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, filter, map, distinctUntilChanged } from 'rxjs/operators';
import { IDataSeries } from 'src/app/models/list-series.model';
import { GetListService } from 'src/app/services/get-list.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {
  @ViewChild('inputTag', { static: false }) public inputElem: ElementRef;

  public searchName: string;
  public listSeries: Array<IDataSeries>;
  public listGenres: Array<string>;
  public listDates: Array<any>;
  public date: string | number;
  public genre: string;

  private response: IDataSeries[];
  private changedResponse: IDataSeries[];
  private firstCounter: number = 0;
  private secondCounter: number = 0;
  private selectedGenre: string;
  private selectedDate: string;

  constructor (private getListService: GetListService) { }

  ngOnInit(): void {
    this.getListService.valueSeries.subscribe((data: Array<IDataSeries>) => {
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

  public filter(value: string, id: string) {
    let response = this.getListService.getResponse();

    id === "genre" ? this.selectedGenre = value : this.selectedDate = value;

    response = this.filterGenre(this.selectedGenre, response);
    response = this.filterDate(this.selectedDate, response);

    this.getListService.transferData(response);
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

  private filterListGenres(value: Array<IDataSeries>) {
    if (this.firstCounter > 1) return;
    let arrGenres: Array<string> = [ "All genres" ];
    value.forEach(el => el.genre.forEach(item => arrGenres.push(item)));
    this.listGenres = Array.from(new Set(arrGenres));
    this.selectedGenre = this.listGenres[0];
    this.firstCounter++;
  }

  private filterListDates(value: Array<IDataSeries>) {
    if (this.secondCounter > 1) return;
    let arrDates: Array<any> = [];
    value.forEach(el => arrDates.push(Number(el.premiere.slice(-4))));
    arrDates.sort((a, b) => a - b);
    this.listDates = Array.from(new Set(arrDates));
    this.listDates.unshift("All dates");
    this.selectedDate = this.listDates[0];
    this.secondCounter++;
  }

  private filterGenre(value: string, response: IDataSeries[]): IDataSeries[] {
    return value === "All genres" ?
      response : response.filter((el) => el.genre.indexOf(value) >= 0);
  }

  private filterDate(value: string, response: IDataSeries[]): IDataSeries[] {
    return value === "All dates" ?
      response : response.filter((el) => el.premiere.indexOf(value) >= 0);
  }
}
