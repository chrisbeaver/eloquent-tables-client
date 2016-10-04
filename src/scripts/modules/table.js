import { Paginator } from './paginator';
import { ajaxListener } from './ajaxRequest';

export class Table {
    constructor(elem) {
        this.elem = elem;  // HTML Element
        this.initialize();
    }
  
    load() {
        // console.log(tables);
        // const elem = tables[0].getElementsByTagName('tbody')[0];
        
        let r = new XMLHttpRequest();
        r.open('POST', this.elem.getAttribute('data-target'), true);
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
    
    // ajaxListener(table) {
    //     // console.log(paginator);
    //     // total_count.set(payload.count);
    //     let payload = JSON.parse(responseText);
    //     payload.data.forEach(function(data) {
    //         console.log(this);
    //         var row = this.elem.insertRow(-1);
    //         // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    //         var cell1 = row.insertCell(0);
    //         var cell2 = row.insertCell(1);
    //         var cell3 = row.insertCell(2);
    //         var cell4 = row.insertCell(3);

    //         // Add some text to the new cells:
    //         cell1.innerHTML = data.id;
    //         cell2.innerHTML = data.company.name;
    //         cell3.innerHTML = data.name;
    //         cell4.innerHTML = data.price;
    //     });
    //     // console.log(paginator);
    //     // total_count.set(payload.count);
    //     let paginator = new Paginator(this.elem, 10);
    //     paginator.buildHTML();
    // }

    initialize() {
        let wrapper = document.createElement('div');
        wrapper.className = 'table-wrapper';
        let table = this.elem;
        
        // document.body.insertBefore(wrapper, table);
        // wrapper.appendChild(table);
    }
}