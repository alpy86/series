import { Component, OnInit } from '@angular/core';
import { DataSeries } from 'src/app/models/list-series';
import { GetListService } from 'src/app/services/get-list.service';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss']
})
export class ListHeaderComponent implements OnInit {
  private response: DataSeries[];
  private changedResponse: DataSeries[];

  constructor (private getListService: GetListService) { }

  ngOnInit(): void {
  }

  public sortDataName(directionSort: string): void {
    this.response = this.getListService.getResponse();
    this.changedResponse = this.response.sort((a, b) => {
      if (directionSort === "up") {
        return a.name > b.name ? 1 : -1;
      }
      if (directionSort === "down") {
        return a.name > b.name ? -1 : 1;
      };
    });

    this.getListService.transferData(this.changedResponse);
  }

  public sortDataSeason(directionSort: string): void {
    this.response = this.getListService.getResponse();
    this.changedResponse = this.response.sort((a, b) => {
      if (directionSort === "up") {
        return Number(a.season) - Number(b.season);
      }
      if (directionSort === "down") {
        return Number(b.season) - Number(a.season);
      };
    });

    this.getListService.transferData(this.changedResponse);
  }

  public sortDataNetwork(directionSort: string): void {
    this.response = this.getListService.getResponse();
    this.changedResponse = this.response.sort((a, b) => {
      if (directionSort === "up") {
        return a.network[0] > b.network[0] ? 1 : -1;
      }
      if (directionSort === "down") {
        return a.network[0] > b.network[0] ? -1 : 1;
      };
    });

    this.getListService.transferData(this.changedResponse);
  }

  public sortDataPremiere(directionSort: string): void {
    this.response = this.getListService.getResponse();
    this.changedResponse = this.response.sort((a, b) => {
      if (directionSort === "up") {
        return a.premiere > b.premiere ? 1 : -1;
      }
      if (directionSort === "down") {
        return a.premiere > b.premiere ? -1 : 1;
      };
    });

    this.getListService.transferData(this.changedResponse);
  }



  // public getSortCardsByViews(): void {
  //   this.response = this.httpService.getResponse();

  //   this.responseDetails = this.response.items.sort((a, b) =>
  //     Number(b.statistics.viewCount) - Number(a.statistics.viewCount));

  //   this.httpService.transferData(this.responseDetails);
  // }

  // public getSortCardsByWord(value: string): void {
  //   this.response = this.httpService.getResponse();

  //   if (!value) {
  //     this.responseDetails = this.response.items;
  //   } else {
  //     this.responseDetails = this.response.items.filter(
  //       (el) => el.snippet.title.toLowerCase().indexOf(value.toLowerCase()) > 0);
  //   }

  //   this.httpService.transferData(this.responseDetails);
  // }
}
