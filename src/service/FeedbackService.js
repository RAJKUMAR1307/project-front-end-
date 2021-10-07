import axios from 'axios';
export default{
    putFeedback: function(feedback){
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
                .post("/clgfeedback/insert", feedback, config)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
}
