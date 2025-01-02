const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

// Getting api endpoing as /total-distance?distance1={distance1}&distance2={distance2}
app.get('/total-distance', (req, res) => {
  res.send(
    //parsing the distances to float and convering all to string
    (
      parseFloat(req.query.distance1) + parseFloat(req.query.distance2)
    ).toString()
  );
});
// Getting api endpoing as /total-time?time1={time1}&time2={time2}&time3={time3}
app.get('/total-time', (req, res) => {
  res.send(
    (
      parseFloat(req.query.time1) +
      parseFloat(req.query.time2) +
      parseFloat(req.query.time3)
    ).toString()
  );
});
// Here we are calculating the average-speed by API.Getting api endpoing as /average-speed?totalDistance={totalDistance}&totalTime={totalTime}
app.get('/average-speed', (req, res) => {
  res.send(
    (
      parseFloat(req.query.totalDistance) / parseFloat(req.query.totalTime)
    ).toString()
  );
});
// Getting api endpoing as /eta?distance={distance}&speed={speed}
app.get('/eta', (req, res) => {
  res.send(
    (parseFloat(req.query.distance) / parseFloat(req.query.speed)).toString()
  );
});
// Getting api endpoing as /total-calories?duration1={duration1}&duration2={duration2}&caloriesPerMinute={caloriesPerMinute}
app.get('/total-calories', (req, res) => {
  res.send(
    (
      (parseFloat(req.query.duration1) + parseFloat(req.query.duration2)) *
      parseFloat(req.query.caloriesPerMinute)
    ).toString()
  );
});
// Getting api endpoing as /interest-earned?principal={principal}&rate={rate}&time={time}
app.get('/interest-earned', (req, res) => {
  res.send(
    (
      (parseFloat(req.query.principal) *
        parseFloat(req.query.rate) *
        parseFloat(req.query.time)) /
      100
    ).toString()
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
