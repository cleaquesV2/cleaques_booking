// import { MenuOptions } from "@/shared/menu/Menu";
// import AppEmptyState from "@/shared/empty/app-empty-state";
import { OptionType } from "./base.types";
import React, { JSX } from "react";

export type PrimitiveType = string | number | boolean | Date | null | undefined;

export type Pagination = {
  total: number;
  pageNumber: number;
  pageSize: number;
  totalPage: number;
};

export type Pagination_ = {
  total: number;
  pageNumber: number;
  pageSize: number;
  totalPages?: number;
};
export interface ITablePagination {
  search: string;
  sort?: string;
  filterBy?: string | number;
  pagination: Pagination;
}

export type PrimitiveRecursiveType =
  | PrimitiveType
  | PrimitiveRecursiveType[]
  | {
      [key: string]: PrimitiveRecursiveType;
    };

export type RecursiveDataType = Record<
  string,
  PrimitiveRecursiveType | { [key: string | number]: RecursiveDataType }
>;

export type DataSourceObjType<P extends RecursiveDataType> = P;

export type ITablePaginationFunction = React.Dispatch<
  React.SetStateAction<ITablePagination>
>;

export type DataTableColumnType<TField extends RecursiveDataType> = {
  dataIndex: string;
  title: string;
  filter?: boolean;
  headerClassName?: string;
  renderFilter?: React.ReactNode;
  sorter?: boolean;
  isCurrency?: "currency" | "format";
  render?: (
    _row: PrimitiveRecursiveType,
    col?: DataSourceObjType<TField>,
    _index?: number,
    _onClick?: (
      _row: PrimitiveRecursiveType,
      _col: DataSourceObjType<TField>
    ) => void
  ) => JSX.Element;
  width?: number | string;
  className?: string;
  onMenuClick?: (_row: PrimitiveRecursiveType, _col: TField) => void;
};

export type DataTableProps<TField extends RecursiveDataType> = {
  columns: DataTableColumnType<TField>[];
  dataSource: DataSourceObjType<TField>[];
  tableParams: ITablePagination;
  setTableParams: ITablePaginationFunction;
  //   emptyState?: React.ComponentProps<typeof AppEmptyState>;
  loading?: boolean;
  handleFilter?: (event: React.MouseEvent<unknown>, property: string) => void;
  onRowClick?: (x: DataSourceObjType<TField>) => void;
  stickyHeader?: boolean;
  stickyFooter?: boolean;
  onMenuClick?: (x: DataSourceObjType<TField>) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  menuOptions?: any[];
  // menuOptions?: MenuOptions[];
  menuIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>> & {
    title?: string | undefined;
  };
  title?: string;
  menuAction?: "default" | "none";
  checkValue?: (string | number)[];
  hidePagination?: boolean;
  onCheckedChange?: (_x: (string | number)[]) => void;
  showCheck?: boolean;
  count?: boolean;
  maxHeight?: number | string;
  customHeaderNode?: React.ReactNode;
  ContainerDiv?: React.ComponentProps<"div">;
  hideDropDown?: boolean;
  collapsable?: boolean;
  viewPagination?: boolean;
};

export interface EnhancedTableHeadProps<TField extends RecursiveDataType> {
  columns: DataTableColumnType<TField>[];
  order: OrderType;
  orderBy: string;
  rowCount?: number;
  onSort?: (event: React.MouseEvent<unknown>, property: string) => void;
  onSelectAllClick?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFilter?: (event: React.MouseEvent<unknown>, property: string) => void;
  checker?: boolean;
  stickyHead?: boolean;
  checkValue?: (string | number)[];
  onCheckedChange?: (_x: (string | number)[]) => void;
  dataLength: number;
  allValues: (string | number)[];
  count?: boolean;
  showCheck?: boolean;
}

export type OrderType = "asc" | "desc";

export interface ITableFooter {
  tableParams: ITablePagination;
  setTableParams: ITablePaginationFunction;
}

export interface ITablePaginationProps {
  count: number;
  rowsPerPageOptions: (number | string | OptionType)[];
  rowsPerPage: number;
  page: number;
  onPageChange: (event: unknown, value: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  colSpan: number;
  stickyFooter?: boolean;
  totalPages?: number;
}

export interface ITableMeta {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta?: any;
  // meta?: TableMeta;
}
