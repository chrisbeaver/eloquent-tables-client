import { tables } from './globals';
import { Table } from './modules/table';
// import { ajaxRequest } from './modules/ajaxRequest';

let elem = tables[0];
let table = new Table(elem);
table.load();

export default tables;
