import { Component, OnInit, Input } from '@angular/core';

import { DataSeries } from 'src/app/models/list-series';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit {
  @Input() public dataSeries: DataSeries;

  public listGenres: Array<string>;
  public listNetworks: Array<string>;
  public genre: string;
  public network: string;

  constructor() { }

  ngOnInit(): void {
    this.listGenres = this.dataSeries.genre;
    this.listNetworks = this.dataSeries.network;
  }

}
