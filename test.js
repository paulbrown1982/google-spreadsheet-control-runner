const runner = require('./google-spreadsheet-control-runner');

runner("125dw1OsJtyzXmeFWVkfbtumOFBLh1_4RSQjfgHDwdGE", (row) => {
    return (step) => {
        step(null, `Processed row: ${row.id}`);
    }
}, console.log, 802, 10);
