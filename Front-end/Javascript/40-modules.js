// There are two ways to export: Named export and default export, as below:
// 1. Named Exports:
// In-line individually:
export const name = "vinh";
export const age = "24";
//All at once at the bottom:
const service1 = "WMC";
const service2 = "callpark";
export { service1, service2 };

// 2. Default Exports:
const message = () => {
    const title = "w3school";
    const content = "positive articles";
    return title + content;
};
export default message;

///////////////////////////////////////////////////////////////////////////

// There are also two ways to import: Import from named exports and import from default exports:
import { service1, service2 } from "/40-modules.js";
import message from "./40-modules.js";