import { tables, rows } from '../globals';
import { Table } from './table';
import { populateTable } from './populateTable';
/**
 * AJAX Request to server to get Table data.
 */
export function ajaxRequest()
{
    let r = new XMLHttpRequest();
    
    r.open('POST', tables[0].getAttribute('data-target'), true);
    r.setRequestHeader('X-CSRF-TOKEN', '{{ csrf_token() }}');
    r.setRequestHeader('take', '10');
    r.setRequestHeader('skip', '20');
    r.setRequestHeader('search', 'Wiza');
    r.addEventListener('load', ajaxListener);
    r.onreadystatechange = function () {
        if (r.readyState != 4 || r.status != 200) return; 
        // console.log(r.responseText);
    };
    r.send('take=1');
}

/**
 * Call back function fired on AJAX result.
 */
export function ajaxListener()
{
    // console.log(JSON.parse(this.responseText));
    let elem = tables[0]; //.getElementsByTagName('tbody')[0];
    // let table = new Table(elem, rows.set(JSON.parse(this.responseText)));
    // table.load();
    rows.set(JSON.parse(this.responseText));
    populateTable(rows.collection);
}