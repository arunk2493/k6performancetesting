import http from 'k6/http';
import { Trend, Rate, Counter, Gauge } from 'k6/metrics';
import { sleep } from 'k6';

export let TrendRTT = new Trend('RTT');
export let RateContentOK = new Rate('Content OK');
export let GaugeContentSize = new Gauge('ContentSize');
export let CounterErrors = new Counter('Errors');
export let options = {
    stages: [
        { duration: '10s', target: 10 },
        { duration: '30s', target: 5 },
        { duration: '20s', target: 10 },
    ],
    thresholds: {
        RTT: ['p(90)<400', 'p(95)<450', 'avg<400', 'med<350', 'min<400'],
        'Content OK': ['rate>0.95'],
        ContentSize: ['value<4000'],
        Errors: ['count<100'],
    },
};

export default function () {
    let res = http.get('https://test-api.k6.io/public/crocodiles/1/');
    let contentOK = res.json('name') === 'Bert';

    TrendRTT.add(res.timings.duration);
    RateContentOK.add(contentOK);
    GaugeContentSize.add(res.body.length);
    CounterErrors.add(!contentOK);

    sleep(1);
}
