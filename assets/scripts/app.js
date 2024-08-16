import { apiKey } from "./util.js"; //*

//displays apiKey from util file in browser console
console.log(apiKey);

//*
////alternative1:
////when import uses default
//import apiKey from "./util.js";

////alternative2:
////when importing multiple files
//import { apiKey, abc } from ".util/js";

////alternative3:
////when importing multiple files as one huge group
//import * as util from "util.js";
//console.log(util.apiKey);

////alternative4:
////when importing multiple files but asigning aliases to them
//import { apiKey, abc as content } from ".util/js";
//console.log(content);