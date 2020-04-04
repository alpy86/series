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

  constructor (private getListService: GetListService) { }

  ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    fromEvent(this.inputElem.nativeElement, 'keyup')
      .pipe(
        debounceTime(700),
        map((event: InputEvent) => (<HTMLInputElement>event.target).value),
        filter(value => value.length > 2),
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

}
