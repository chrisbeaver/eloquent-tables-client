export default class {
    constructor() {
       this.load()
    }
  
    load() {
        
        let r = new XMLHttpRequest();
    
        r.open('POST', '/products', true);
        r.setRequestHeader('X-CSRF-TOKEN', '{{ csrf_token() }}');
        r.setRequestHeader('take', '10');
        r.setRequestHeader('skip', '20');
        r.setRequestHeader('search', 'Wiza');
        r.addEventListener('load', this.handler);
        r.onreadystatechange = function () {
            if (r.readyState != 4 || r.status != 200) return; 
        };
        r.send('take=1');
        
    }

    handler() {
        this.rows = (JSON.parse(this.responseText));
        console.log(this.rows);
    }
}