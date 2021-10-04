import axios from 'axios';
export default{
    putStudent: function(student){
        var ax = axios.create({
            baseURL: "http://localhost:9090",
        });
        let config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        return new Promise((resolve, reject) => {
            ax
                .post("/student/insert", student, config)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
    
}