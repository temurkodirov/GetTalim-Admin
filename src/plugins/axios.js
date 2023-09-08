import axios from "axios";
import Cookies from 'js-cookie';
const instance = axios.create({
    baseURL: "http://64.227.42.134:3030",
    headers:{
        ['Authorization'] : `Bearer ${Cookies.get("access_token")}`
    }
});


// Interceptors for handling common scenarios
instance.interceptors.response.use(
    response => response,
    error => {
        if(error.response.status === 400)
        {
            return error.response;
        }
        if (error.response.status === 401) {
            // Redirect to unauthorized page
            // You can use Vue Router to navigate
            console.log("401 error handled")
            alert("Error - 401 Unauthorized")
        } else if (error.response.status === 404) {
            // Redirect to not found page
            // You can use Vue Router to navigate
            console.log("404 error handled")
            alert("Error - 404 Not found error")
        }
        else if (error.response.status === 500){
            console.log("500 error handled");
            alert("Error - 500 Server or Backend")
        }
        else {
            console.log(error.response);
            alert(error.response.data)
        }
    }
);

export default instance;