import { Component, OnInit } from '@angular/core';
import { GetListService } from 'src/app/services/get-list.service';
import { DataSeries } from 'src/app/models/list-series';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})

export class ItemsListComponent implements OnInit {
  public dataItem: DataSeries;
  public listSeries: Array<DataSeries>;

  constructor(private getListService: GetListService) { }

  public ngOnInit(): void {
    this.getListService.getListSeries()
    this.getListService.valueSeries.subscribe((data: Array<DataSeries>) => {
      this.listSeries = data;
    });
  }
}
