export const ENDPOINTURL = "https://hn.algolia.com/api/v1"

export interface TableRows {
    name: string;
    position: 'left' | 'center' | 'right';
  }

export const tableRowData:TableRows[] = [{
    name:'title',
    position: 'left'
},{
    name:'author',
    position: 'center'
},{
    name:'create_at',
    position: 'center'
}]
