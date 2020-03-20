declare interface Arr<T> {
    multisort(key: string, direction: string): Array<T>;
    multifilter(key: string, find: string, operator: boolean): Array<T>;
    multikey(key: string): Array<T>;
    intersect(array: any[], multi: boolean): Array<T>;
    diff(array: any[], total: boolean): Array<T>;
    unique: Array<T>;
    pushIfNotExists(newValue: string): number;
    pushMultiple(newValue: string): number;
    pushMultipleIfNotExists(newValue: string): number;
    max: number | null;
    min: number | null;
    random: T;
    summ: number | null;
    average: number | null;
}
