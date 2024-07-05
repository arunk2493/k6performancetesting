import http from 'k6/http';
import { check, sleep} from 'k6';

export let options = {
    stages: [
        { duration: '1m', target: 10 },
        { duration: '2m', target: 10 },
        { duration: '1m', target: 20 },
        { duration: '2m', target: 25 },
        { duration: '3m', target: 35 },
        { duration: '4m', target: 15 },
        { duration: '2m', target: 5 },

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
