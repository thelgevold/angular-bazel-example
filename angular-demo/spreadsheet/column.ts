export class Column{
    cellValue:String;

    constructor(public columnIndex: number,public rowIndex: number){
        this.cellValue = '';
    }
}