import axios, { type AxiosResponse ,AxiosError} from 'axios';

interface todo{
    userid: number,
    id: number,
    title: string,
    completed: boolean
}

let fetchdata= async() =>{
       try{
       let response :AxiosResponse<todo>= await axios.get('https://jsonplaceholder.typicode.com/todos/1')
       console.log(`ID: ${response.data.id}`);
    console.log(`User ID: ${response.data.userid}`);
    console.log(`Title: ${response.data.title}`);
    console.log(`Completed: ${response.data.completed}`);
       }
       catch(err:any){
        if (axios.isAxiosError(err)) {
            console.log("Axios error:", err.message);
            if (err.response) {
                console.log("Response data:", err.response.data);
                console.log("Response status:", err.response.status);
                console.log("Response headers:", err.response.headers);
            }
        }
       }
}
fetchdata()