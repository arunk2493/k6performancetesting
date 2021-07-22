import http from 'k6/http';

export let options = {
    thresholds: {
        http_req_failed: ['rate<0.01'],   // http errors should be less than 1%
        http_req_duration: ['p(95)<500','avg<500'], // 95% of requests should be below 5$00ms
    },
    vus:10,
    duration:'30s',
    iteration:10
};

export default function () {
    http.get('https://petstore.swagger.io/v2/store/inventory');
}
