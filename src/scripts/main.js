import { tables } from './globals';
import { Table } from './modules/table';
import { initializeTable } from './modules/initializeTable';
// import { ajaxRequest } from './modules/ajaxRequest';

initializeTable();
let elem = tables[0];
let table = new Table(elem);
table.load();
// ajaxRequest();
