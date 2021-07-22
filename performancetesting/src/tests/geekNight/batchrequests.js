import http from 'k6/http';
import { check } from 'k6';

export default function () {
    let req1 = {
        method: 'GET',
        url: 'https://httpbin.org/get',
    };
    let req2 = {
        method: 'GET',
        url: 'https://test.k6.io',
    };
    let req3 = {
        method: 'POST',
        url: 'https://httpbin.org/post',
        body: {
            hello: 'world!',
        },
        params: {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        },
    };
    let responses = http.batch([req1, req2, req3]);
    // httpbin.org should return our POST data in the response body, so
    // we check the third response object to see that the POST worked.
    check(responses[2], {
        'form data OK': (res) => JSON.parse(res.body)['form']['hello'] === 'world!',
    });
}
