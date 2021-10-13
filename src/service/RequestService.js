import axios from 'axios';
export default{
    putRequest: function(send){
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
                .post("/request/insert", send, config)
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    getAllRequests: function(){
        var ax = axios.create({
            baseURL: "http://localhost:9090",
        }); 
        return new Promise((resolve, reject) => {
            ax({
                method: 'get',
                url: '/request/getAll',
            }).then((response) => {                 
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });                       
        
    }
 }
