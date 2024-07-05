import http from 'k6/http';

export default function () {
   // const create = require('../../data/create-pet.json');
    var url = 'https://petstore.swagger.io/v2/pet';
    var payload = JSON.stringify({
        "id": 2493,
        "category": {
            "id": 2493,
            "name": "birds"
        },
        "name": "Budgie",
        "photoUrls": [
            "string"
        ],
        "tags": [
            {
                "id": 13,
                "name": "Blue"
            }
        ],
        "status": "available"
    });

    var params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    http.post(url, payload, params);
}
