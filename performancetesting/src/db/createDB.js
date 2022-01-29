const Influx = require('influx');
const influx = new Influx.InfluxDB({
    host: 'localhost',
    port: 8087,
    username: 'arun2493',
    password: 'Welcome@2021'
})
const dbName = 'PerformanceTesting'
// Create an InfluxDB database
influx.createDatabase(dbName);
console.log(dbName);
//influx.getMeasurements(dbName).then(names =>    console.log('My measurement names are: ' + names.join(', ')));

