import { IListColumns, HeaderColumns, ColumnsType } from 'src/app/models/list-series.model';

export const ListColumns: IListColumns[] = [
  {
    name: HeaderColumns.name,
    class: `col-${HeaderColumns.name}`,
    type: ColumnsType.string,
  },
  {
    name: HeaderColumns.season,
    class: `col-${HeaderColumns.season}`,
    type: ColumnsType.number,
  },
  {
    name: HeaderColumns.network,
    class: `col-${HeaderColumns.network}`,
    type: ColumnsType.string,
  },
  {
    name: HeaderColumns.premiere,
    class: `col-${HeaderColumns.premiere}`,
    type: ColumnsType.date,
  },
]
