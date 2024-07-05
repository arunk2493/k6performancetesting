import http from 'k6/http';
export default function () {
    var res = http.get('https://reqres.in/api/users?page=2');
    console.log('Response Body was ' + String(res.status));
    console.log('Response Body was ' + String(res.body));
    console.log('Response Duration was ' + String(res.timings.duration));
    console.log('Response receive was ' + String(res.timings.receiving));
}
