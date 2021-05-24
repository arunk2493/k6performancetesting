const Influx = require('influx');
const influx = new Influx.InfluxDB({
    host: 'localhost',
    port: 8086,
    username: 'arun2493',
    password: 'Welcome@2021'
})
const dbName = 'PerformanceMetrics'
// Create an InfluxDB database
influx.createDatabase(dbName);
console.log(dbName);
