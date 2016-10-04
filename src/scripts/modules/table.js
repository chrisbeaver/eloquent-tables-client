// import { Paginator } from './paginator';
import { Header } from './header';
import { ajaxListener } from './ajaxRequest';

export class Table {
    constructor(elem) {
        this.table = elem;  // HTML Table Element
        this.parent = this.initialize();
        this.header = this._loadHeader();
    }
  
    load() {
        
        let r = new XMLHttpRequest();
        r.open('POST', this.table.getAttribute('data-target'), true);
        r.setRequestHeader('X-CSRF-TOKEN', '{{ csrf_token() }}');
        r.setRequestHeader('take', '10');
        r.setRequestHeader('skip', '20');
        r.setRequestHeader('search', 'Wiza');
        r.addEventListener('load', ajaxListener);
        r.onreadystatechange = function () {
            if (r.readyState != 4 || r.status != 200) return; 
        };
        r.send();

    }
    
    initialize() {
        // Put wrapper around table.
        let wrapper = document.createElement('div');
        wrapper.className = 'table-wrapper';
        let table = this.table;
        table.parentElement.insertBefore(wrapper, table);
        wrapper.appendChild(table);
        return wrapper;
    }

    _loadHeader() {
        return new Header(this.table.tHead);
    }
}