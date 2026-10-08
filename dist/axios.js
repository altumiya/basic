import axios, { AxiosResponse } from 'axios';
let fetchdata = async () => {
    try {
        let response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log(response.data);
    }
    catch (err) {
        if (axios.isAxiosError(err)) {
            console.log("Axios error:", err.message);
            if (err.response) {
                console.log("Response data:", err.response.data);
                console.log("Response status:", err.response.status);
                console.log("Response headers:", err.response.headers);
            }
        }
    }
};
//# sourceMappingURL=axios.js.map