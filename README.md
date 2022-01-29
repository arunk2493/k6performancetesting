# k6performancetesting

Steps to setup the framework:

1. brew install k6
2. brew install influxdb@1
3. brew install influxdb-cli

Then npm install for downloading the dependencies

docker-compose up -d -> This will start the grafana and influxdb images in 3003 and 8087 ports

Then login to the grafana dashboard with admin and admin credentials at first and change the password

For Data setup in grafana select influx db and provide the url as http://systemip:8086 -> default port
For Data setup of influx with container name use-> http://systemip/containername

For creating influx db run the createDB.js from db folder using node createDB.js

In grafana data setup, now add the db name and credentials. The credentials are provided in compose file

Then run the scripts using npm run <command>