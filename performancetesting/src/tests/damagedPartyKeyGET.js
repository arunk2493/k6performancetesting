import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
        { duration: '10s', target: 5 },
        { duration: '30s', target: 0 },
        { duration: '20s', target: 5 },
    ],
};
const SLEEP_DURATION = 0.1;

export default function () {
    let params = {
        headers: {
            'Content-Type': 'application/json',
            'Cookie': 'NSC_JOlmtio1b55fprgb5dup25csayxcdd3=ffffffff09bc370445525d5f4f58455e445a4a4229a0; mod_auth_openidc_session=b2e9d8e3-15d4-4a79-a672-c4bdd8089156; ms-profile=2; SESSION=ZTE0Mjk3MjItYTY0MS00OTQ5LWE1M2ItOGQ1ZWJlY2Y3Njhh'
        },
        tags: {
            name: 'login', // first request
        },
    };
        // Login request
        let user_profile_response = http.get(
            'https://k1-incarichisinistri.generali.it/ea-api/damaged-parties/005-TV6-00-2020-000000027-1-384883828',
            params,
        );
        check(user_profile_response, {
            'is status 200': (r) => r.status === 200});
        console.log(user_profile_response.body.toString());
        check(user_profile_response,{
            'is key 005-TV6-00-2020-000000027-1-384883828':(r)=> r.body.key === '005-TV6-00-2020-000000027-1-384883828'});
}
