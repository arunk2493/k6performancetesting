import http from 'k6/http';

export let options = {
    thresholds: {
        // http_req_failed: ['rate<0.01'],   // http errors should be less than 1%
        http_req_duration: ['p(95)<100'], // 95% of requests should be below 200ms
    },
};

export default function () {
    http.get('https://test-api.k6.io/public/crocodiles/1/');
}
