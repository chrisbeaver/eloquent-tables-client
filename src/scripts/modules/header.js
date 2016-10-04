export class Header {
    constructor(elem) {
        this.elem = elem;  // HTML Element
        this.columns = this.load();
    }
  
    load() {
        return [].slice
          .call(this.elem.querySelectorAll('th'))
          .map(function(header) {
                return header.innerHTML;
          });
    }
}