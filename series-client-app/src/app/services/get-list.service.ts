import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { IDataSeries, IListSeries } from 'src/app/models/list-series.model';

@Injectable({
  providedIn: 'root'
})

export class GetListService {
  private listSeriesUrl: string = 'assets/series.json';
  public response: IDataSeries[];
  public valueSeries$: BehaviorSubject<Array<IDataSeries>> = new BehaviorSubject<Array<IDataSeries>>([]);
  public valueSeries: Observable<Array<IDataSeries>> = this.valueSeries$.asObservable();

  constructor(private http: HttpClient) { }

  public getListSeries(): void {
    this.http.get(this.listSeriesUrl).subscribe((data: IListSeries) => {
      this.valueSeries$.next(data.list);
      this.response = data.list;
    });
  }

  public getResponse(): IDataSeries[] {
    return this.response;
  }

  public transferData(value: Array<IDataSeries>): void {
    this.valueSeries$.next(value);
  }
}
