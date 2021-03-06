import { tables, total_count } from '../globals';
import { Paginator } from './paginator';
/**
 * AJAX Listener to build table with data returned 
 * from server.
 *
 * @param  {Json} payload a server response
 */
export function populateTable(payload)
{
    // console.log(tables);
    const elem = tables[0].getElementsByTagName('tbody')[0];
    payload.data.forEach(function(data) {
        
        var row = elem.insertRow(-1);
        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        // Add some text to the new cells:
        cell1.innerHTML = data.id;
        cell2.innerHTML = data.company.name;
        cell3.innerHTML = data.name;
        cell4.innerHTML = data.price;
    });
    // console.log(paginator);
    total_count.set(payload.count);
    let paginator = new Paginator(elem, total_count.value);
    paginator.buildHTML();
}