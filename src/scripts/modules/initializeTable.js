import { tables } from '../globals';
/**
 * Construct basic framework for creating a table.
 */
export function initializeTable()
{
    let wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';
    let table = tables[0];
    
    document.body.insertBefore(wrapper, table);
    wrapper.appendChild(table);
}