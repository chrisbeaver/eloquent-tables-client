import { tables } from './globals';
import { Table } from './modules/table';

let elem = tables[0];
let table = new Table(elem);
// table.load();

export default table;
