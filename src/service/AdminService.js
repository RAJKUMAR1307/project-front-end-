import axios from 'axios';
export default{
loginAdmin: function(check){
    var axis = axios.create({
        baseURL: "http://localhost:9090",
    });
    let config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    return new Promise((resolve, reject) => {
        axis
            .post("/admin/user",check, config)
            .then(response => {
           
             
                resolve(response);
            })
            .catch(err => {
           
                reject(err);
            });
    }); 
}
}