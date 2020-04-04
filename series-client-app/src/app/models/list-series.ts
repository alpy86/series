export interface ListSeries {
  list: Array<DataSeries>;
}

export interface DataSeries {
  name: string;
  genre: Array<string>;
  season: number;
  network: Array<string>,
  premiere: string;
}
