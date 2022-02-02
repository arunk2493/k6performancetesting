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

You can also create databases from influx db container by using the below commands.
1. docker ps -a -> To list down the containers
2. docker exec -it <container id> bash -> This will go into the container bash
3. Now execute influx. This will connect to the influxdb
4. SHOW DATABASES;
5. CREATE DATABASE <DBNAME>
6. We can create retention policy in influx for the data bases;
   1. CREATE RETENTION POLICY "a_year" ON "DB_NAM" DURATION 52w REPLICATION 1
   2. CREATE RETENTION POLICY "two_hour" ON "DB_NAM" DURATION 2h REPLICATION 1 DEFAULT