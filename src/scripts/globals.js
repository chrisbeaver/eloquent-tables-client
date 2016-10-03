export let tables = document.getElementsByClassName('eloquent-table');

export let headers = [].slice
    .call(tables[0].tHead.querySelectorAll('th'))
    .map(function(header) {
        return header.innerHTML;
    });

export let paginator = document.createElement('div');

export let total_count = { value: 0,
    set: function(value) {
		this.value = value;
 	}
};

export let rows = { 
	collection: null,
	set: function(value) {
		this.collection = value;
	}
};

export let config = {
    tableRows: 10,
    setTableRows: function(value) { this.tableRows = value; }
}