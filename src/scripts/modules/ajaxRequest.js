import { populateTable } from './populateTable.js'
/**
 * AJAX Request to server to get Table data.
 */
export function ajaxRequest()
{
    let r = new XMLHttpRequest();
    
    r.open("POST", tables[0].getAttribute("data-target"), true);
    r.setRequestHeader("X-CSRF-TOKEN", "{{ csrf_token() }}");
    r.setRequestHeader("take", "10");
    r.setRequestHeader("skip", "5");
    r.setRequestHeader("search", "Wiza");
    r.addEventListener("load", ajaxListener);
    r.onreadystatechange = function () {
        if (r.readyState != 4 || r.status != 200) return; 
        // console.log(r.responseText);
    };
    r.send("take=1");
}

/**
 * Call back function fired on AJAX result.
 */
export function ajaxListener()
{
    rows = JSON.parse(this.responseText);
    populateTable(rows, paginator);
}