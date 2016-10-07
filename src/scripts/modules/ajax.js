import table from '../main';
export default {

    requestData() {
        
        let r = new XMLHttpRequest();
        r.requester = this;

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
        
    },

    handler() {
        console.log('Handler fired');
        this.requester.response = (JSON.parse(this.responseText));
        table.response = this.requester.response;
        console.log(this.requester);  // Showing XMLHttpRequest, I want this class though.
    }
}