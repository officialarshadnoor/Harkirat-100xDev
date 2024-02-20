const fs = require("fs");
const express = require("express");

const app = express();
const port = 3000;

function handleFirstRequestc(req, res) {
    res.send('Hello to the 100x devs class!!');
}


// algo for calculation
function calculateSum(counter) {
    var sum = 0;
    for (let i=0;i<=counter;i++){
        sum += i;
    }
    return sum;
}



app.get('/count',(req, res) => {
    let counter  = req.query.counter;
    // calling fn for calculating sum of n no's
    let calculatedSum = calculateSum(counter);
    res.send(`Calculated sum is ${calculatedSum}`);
})

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
}) 





function callbackFn(err, data) {
    if (err) {
        console.log("Error to open file");
        return;
    }
    console.log(data);
}
fs.readFile("a.txt", "utf-8",callbackFn);



