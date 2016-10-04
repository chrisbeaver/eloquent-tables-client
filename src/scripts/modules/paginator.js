import { total_count, config } from '../globals';
/**
 * Fired on AJAX response to construct paginated results.
 *
 */
export function buildPaginator()
{
    // console.log('Count: ' + total_count);
}

export class Paginator {
    constructor(elem, total) {
        this.elem = elem;
        this.total = total;
    }
  
    get pages() {
        return this.calcPages();
    }

    calcPages() {
        return this.total / config.tableRows;
    }

    buildHTML() {
        
        let node = document.createElement('div');
        node.className = 'paginator';
        // wrapper.appendChild(node);
        node.innerHTML = total_count.value;
        this.elem.appendChild(node);
    }
}