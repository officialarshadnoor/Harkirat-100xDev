const fs = require("fs");
const express = require("express");
var bodyParser = require('body-parser')

const app = express();
const port = 3000;

// parse application/json
app.use(bodyParser.json())

function handleFirstRequestc(req, res) {
    res.send('Hello to the 100x devs class!!');
}


function middleware1(req, res, next) {
    console.log("from inside middleware "+ req.headers.counter );
    next();
}

app.use(middleware1);


// algo for calculation
function calculateSum(counter) {
    var sum = 0;
    for (let i=0;i<=counter;i++){
        sum += i;
    }
    return sum;
}

// multiplication calculation fn
function calculateMul(counter) {
    var answer = 1;
    for (let i=1; i<=counter;i++){
        answer *= i;
    }
    return answer;
}

// app.get('/count',(req, res) => {
//     let counter  = req.query.counter;
//     // calling fn for calculating sum of n no's
//     let calculatedSum = calculateSum(counter);
//     res.send(`Calculated sum is ${calculatedSum}`);
// })

app.get('/', handleFirstRequest);

function handleFirstRequest(req, res) {
    var counter = req.body.counter;

    var calculatedSum = calculateSum(counter);
    var calculatedMul = calculateMul(counter);

    var answerObject = {
        sum: calculatedSum,
        mul: calculatedMul
    }
    res.status(200).json(answerObject);
}

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



