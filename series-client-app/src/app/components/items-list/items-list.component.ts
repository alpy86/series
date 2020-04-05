import { Component, OnInit, ViewChild } from '@angular/core';
import { GetListService } from 'src/app/services/get-list.service';
import { DataSeries } from 'src/app/models/list-series';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})

export class ItemsListComponent implements OnInit {
  public dataItem: DataSeries;
  public listSeries: Array<DataSeries>;

  public lowValue: number = 0;
  public highValue: number = 10;


  constructor(private getListService: GetListService) { }

  public ngOnInit(): void {
    this.getListService.getListSeries()
    this.getListService.valueSeries.subscribe((data: Array<DataSeries>) => {
      this.listSeries = data;
    });
  }

  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }
}
