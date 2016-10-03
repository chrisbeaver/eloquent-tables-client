import { initializeTable } from "./modules/initializeTable";
import { ajaxRequest, ajaxListener } from "./modules/ajaxRequest";

let tables = document.getElementsByClassName("eloquent-table");
let headers = [].slice
                .call(tables[0].tHead.querySelectorAll("th"))
                .map(function(header) {
                    return header.innerHTML;
                });
let rows = [];
let paginator;
let total_count;

initializeTable();
ajaxRequest();
