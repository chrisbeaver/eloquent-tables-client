import { tables } from './globals.js';
import { initializeTable } from "./modules/initializeTable";
import { ajaxRequest, ajaxListener } from "./modules/ajaxRequest";

initializeTable();
ajaxRequest();
