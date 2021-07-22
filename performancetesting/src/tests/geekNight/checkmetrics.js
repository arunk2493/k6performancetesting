import { check } from 'k6';
import http from 'k6/http';

export default function () {
    let res = http.get('https://reqres.in/api/users/2');
    check(res, {
        'Body': (r) => r.body.data.id == 2,
    });
}
