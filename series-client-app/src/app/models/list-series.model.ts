export interface IListSeries {
  list: Array<IDataSeries>;
}

export interface IDataSeries {
  name: string;
  genre: Array<string>;
  season: number;
  network: Array<string>,
  premiere: string;
}

export interface IListColumns {
  name: HeaderColumns;
  class: string;
  type: ColumnsType;
}

export enum HeaderColumns {
  name = "name",
  season = "season",
  network = "network",
  premiere = "premiere"
}

export enum ColumnsType {
  string,
  number,
  date
}
