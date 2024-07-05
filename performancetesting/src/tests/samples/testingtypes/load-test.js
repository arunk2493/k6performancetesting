import http from 'k6/http';
import { check, sleep} from 'k6';

export let options = {
    stages: [
        { duration: '1m', target: 10 }, // simulate ramp-up of traffic from 1 to 100 users over 1 minutes.
        { duration: '2m', target: 15 }, // stay at 100 users for 2 minutes
        { duration: '1m', target: 0 }, // ramp-down to 0 users
    ],
    thresholds: {
        http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
        'retrieved users': ['p(99)<1500'], // 99% of requests must complete below 1.5s
    },
};
const BASE_URL = 'https://reqres.in';
export default () => {

    let listUsers = http.get(`${BASE_URL}/users?page=2`);
    check(listUsers, { 'retrieved users': (obj) => obj.body !== null });
};
