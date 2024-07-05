const Influx = require('influx');
const influx = new Influx.InfluxDB({
    host: 'localhost',
    port: 8087,
    username: '<username>',
    password: '<password>'
})
const dbName = 'QACommunity'
// Create an InfluxDB database
influx.createDatabase(dbName);
