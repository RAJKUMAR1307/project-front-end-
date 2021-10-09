<template>
  <div>
  <b-container>
   <!--popup start for login--> 
    <div>
    <b-container>   
       <b-modal id="modal-1" title="Login" hide-footer>
          <b-form ref="form" >
             
             
             <b-form-group>
               <b-form-radio-group v-model="selected">
                 <b-container>
                   <b-row>  
                     <b-col>
                       <b-form-radio v-model="selected" v-bind:value="1" > Admin</b-form-radio>
                     </b-col>
                     <b-col>
                       <b-form-radio v-model="selected" v-bind:value="2"> College</b-form-radio>
                     </b-col>
                     <b-col>
                       <b-form-radio v-model="selected" v-bind:value="3"> Student</b-form-radio>
                     </b-col>
                   </b-row>
                </b-container>
               </b-form-radio-group>
              </b-form-group><br>
             
             
            <b-form-group  label="UserName:" >
               <b-form-input type="text" v-model="check.username" placeholder="Enter your Username">
               </b-form-input>
            </b-form-group><br>
            
            <b-form-group  label="Password:">
               <b-form-input type="password" v-model="check.password" placeholder="Enter your Password" >
               </b-form-input>
            </b-form-group><br>
            
            <div class="text-center">
              <b-button variant="outline-success"  @click="findByUsernameAndPassword()">Submit</b-button>
              <b-button variant="outline-danger" class="mx-3" >Reset</b-button>
           </div>
              
         </b-form>
       </b-modal>
       </b-container>   
    </div>
    <!--popup end for login--> 
 </b-container>   
 </div>
</template>


<script>
import axios from 'axios';
export default {
 name: "popuplogin",
     components: {
     
       },
    data(){
        return{
             check: {
              username: "",
              password: ""
            },
            selected: "1"
        }
    },
     mounted(){
        // this.getAllColleges();
    },
    methods:{
   
        findByUsernameAndPassword: function(){ 
        var ax = axios.create({
            baseURL: "http://localhost:9090",
        }); 
        let config = {
        headers: {
         "Content-Type": "application/json"
            }
        };     
        
        if (this.selected==1){      
        return new Promise((resolve, reject) => {
        ax
              .post("/admin/user", this.check, config)    
                .then(response => {
                    alert("login successfully!!");
                    localStorage.setItem('name', this.check.username)
                    localStorage.setItem('status','verified')
                    this.$router.push({name:'adminlogin'});
                    this.check.username ="";
                    this.check.password ="";
                    resolve(response);
                })
                .catch(err => {
                alert("login failed");
                   localStorage.setItem('status','unverified')
                    this.check.username="",
                    this.check.password=""
                    reject(err);
                });      
        });
        }
        else if (this.selected==2){
        return new Promise((resolve, reject) => {
        ax
              .post("/college/user", this.check, config)    
                .then(response => {
                    alert("login successfully!!");
                    localStorage.setItem('name', this.check.username)
                    localStorage.setItem('status','verified')
                    this.$router.push({name:'collegelogin'});
                    this.check.username ="";
                    this.check.password ="";
                    resolve(response);
                })
                .catch(err => {
                alert("login failed");
                localStorage.setItem('status','unverified')
                this.check.username="",
                this.check.password=""
                    reject(err);
                });      
        });
        }
        else if (this.selected==3){   
        return new Promise((resolve, reject) => {
        ax
              .post("/student/user", this.check, config)    
                .then(response => {
                    alert("login successfully!!");
                   localStorage.setItem('name', this.check.username)
                   localStorage.setItem('status','verified')
                   this.$router.push({name:'studentlogin'});
                   this.check.username ="";
                   this.check.password ="";
                   resolve(response);
                })
                .catch(err => {
                alert("login failed");
                localStorage.setItem('status','unverified')
                this.check.username="",
                this.check.password=""
                    reject(err);
                });      
        });
        }
    }   
  } 
  
  
 }

</script>
    
