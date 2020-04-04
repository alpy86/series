import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, EMPTY } from 'rxjs';
import { catchError, pluck, filter, switchMap, tap } from 'rxjs/operators';

import { DataSeries, ListSeries } from '../models/list-series';

@Injectable({
  providedIn: 'root'
})

export class GetListService {
  private listSeriesUrl: string = 'assets/series.json';
  public response: DataSeries[];
  public valueSeries$: BehaviorSubject<Array<DataSeries>> = new BehaviorSubject<Array<DataSeries>>([]);
  public valueSeries: Observable<Array<DataSeries>> = this.valueSeries$.asObservable();

  constructor(private http: HttpClient) { }

  public getListSeries(): void {
    this.http.get(this.listSeriesUrl).subscribe((data: ListSeries) => {
      this.valueSeries$.next(data.list);
      this.response = data.list;
    });
  }

  public getResponse(): DataSeries[] {
    return this.response;
  }

  public transferData(value: Array<DataSeries>): void {
    this.valueSeries$.next(value);
  }
}

// export class GetListService {
//   private listSeriesUrl: string = 'assets/series.json';
//   public valueSeries$: BehaviorSubject<Array<DataSeries>> = new BehaviorSubject<Array<DataSeries>>([]);
//   public valueSeries: Observable<Array<DataSeries>> = this.valueSeries$.asObservable();

//   constructor(private http: HttpClient) { }

//   public getListSeries(): Observable<unknown> {

//     return this.http.get(this.listSeriesUrl)
//       .pipe (
//         pluck('list'),
//         catchError((err) => {
//           console.log(err);
//           return EMPTY;
//         })
//       )
//   }
// }
