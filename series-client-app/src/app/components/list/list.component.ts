import { Component, OnInit } from '@angular/core';
import { IDataSeries } from 'src/app/models/list-series.model';
import { GetListService } from 'src/app/services/get-list.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  public dataItem: IDataSeries;
  public listSeries: Array<IDataSeries>;
  public lowValue: number = 0;
  public highValue: number = 10;

  constructor(private getListService: GetListService) { }

  public ngOnInit(): void {
    this.getListService.getListSeries();
    this.getListService.valueSeries.subscribe((data: Array<IDataSeries>) => {
      this.listSeries = data;
    });
  }

  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }
}
