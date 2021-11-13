import axios from "axios";

export default function testEndpoint() {
    return axios.post('http://localhost:5000/test', {})
        .then(res => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
            alert("testEndpoint FAILED");
        });
}