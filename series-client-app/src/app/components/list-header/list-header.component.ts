import { Component, OnInit } from '@angular/core';
import { IDataSeries, HeaderColumns, ColumnsType, IListColumns } from 'src/app/models/list-series.model';
import { GetListService } from 'src/app/services/get-list.service';
import { ListColumns } from './list-header.config';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss']
})

export class ListHeaderComponent implements OnInit {
  public listColumns: IListColumns[] = ListColumns;
  private listSeries: IDataSeries[];

  constructor (private getListService: GetListService) { }

  ngOnInit(): void {
    this.getListService.valueSeries.subscribe((data: Array<IDataSeries>) => {
      this.listSeries = data;
    });
  }

  public sortData(type: ColumnsType, name: HeaderColumns, directionSort: string): void {
    let changedResponse: IDataSeries[];

    if (type === ColumnsType.string) {
      changedResponse = this.sortDataByString(name, directionSort, this.listSeries);
    }
    if (type === ColumnsType.number) {
      changedResponse = this.sortDataByNumber(name, directionSort, this.listSeries);
    }
    if (type === ColumnsType.date) {
      changedResponse = this.sortDataByDate(name, directionSort, this.listSeries);
    }
    this.getListService.transferData(changedResponse);
  }

  private sortDataByString(columnName: HeaderColumns, directionSort: string, arr: IDataSeries[]): IDataSeries[] {
    return arr.sort((a, b) => {
      if (directionSort === "up") {
        return a[columnName] > b[columnName] ? 1 : -1;
      }
      if (directionSort === "down") {
        return a[columnName] > b[columnName] ? -1 : 1;
      };
    });
  }

  private sortDataByNumber(columnName: HeaderColumns, directionSort: string, arr: IDataSeries[]): IDataSeries[] {
    return arr.sort((a, b) => {
      if (directionSort === "up") {
        return Number(a[columnName]) - Number(b[columnName]);
      }
      if (directionSort === "down") {
        return Number(b[columnName]) - Number(a[columnName]);
      };
    });
  }

  private sortDataByDate(columnName: HeaderColumns, directionSort: string, arr: IDataSeries[]): IDataSeries[] {
    return arr.sort((a, b) => {
      if (directionSort === "up") {
        return this.changeDateFormat(a[columnName] as string) >
        this.changeDateFormat(b[columnName] as string) ? 1 : -1;
      }
      if (directionSort === "down") {
        return this.changeDateFormat(a[columnName] as string) >
        this.changeDateFormat(b[columnName] as string) ? -1 : 1;
      };
    });
  }

  private changeDateFormat(date: string) {
    return Date.parse(date.split(".").reverse().join('-'));
  }
}
