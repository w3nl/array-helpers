declare interface Array<T> {
  multisort(key: string, direction: string): Array<T>;
  multifilter(key: string, find: string, operator: boolean): Array<T>;
  multikey(key: string): Array<T>;
  intersect(array: any[], multi: boolean): Array<T>;
  diff(array: any[], total: boolean): Array<T>;
  unique(): Array<T>;
  pushIfNotExists(newValue: any[]): number;
  pushMultiple(newValues: any[]): number;
  pushMultipleIfNotExists(newValues: any[]): number;
  max(): number | undefined;
  min(): number | undefined;
  random(): any;
  summ(): number | undefined;
  average(): number | undefined;
}
