import http from 'k6/http';
import { check, sleep} from 'k6';

export let options = {
    vus: 1, // 1 user looping for 1 minute
    duration: '1m',

    thresholds: {
        http_req_duration: ['p(90)<4000'], // 90% of requests must complete below 1.5s
    },
};

const BASE_URL = 'https://reqres.in';
const id_value = Math.floor((Math.random() * 100) + 1);
const USERNAME = 'TestUser'+id_value;
const ROLE = 'QA';

export default () => {
    let createUser = http.post(`${BASE_URL}/api/users`, {
        job: ROLE,
        name: USERNAME,
    });

    console.log("Status:"+createUser.status);

    check(createUser, {
        'Created user successfully': (resp) => resp.status === 201,
    });

    let listUsers = http.get(`${BASE_URL}/users?page=2`);
    check(listUsers, { 'retrieved users': (obj) => obj.body !== null });
};
