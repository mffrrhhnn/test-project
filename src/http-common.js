import axios from "axios";
export default axios.create({
    baseURL: "http://159.223.57.121:8080/swagger-ui/",
    headers: {
        "Content-type": "application/json"
    }
});