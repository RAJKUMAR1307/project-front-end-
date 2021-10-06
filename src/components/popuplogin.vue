<template>
  <div>
  <b-container>
   <!--popup start for login--> 
    <div>
    <b-container>   
       <b-modal id="modal-1" title="Login" hide-footer>
          <b-form ref="form" >
             
             
             
            <b-form-group  label="UserName:" >
               <b-form-input type="text" v-model="clg.username" placeholder="Enter your Username">
               </b-form-input>
            </b-form-group><br>
            
            <b-form-group  label="Password:">
               <b-form-input type="password" v-model="clg.password" placeholder="Enter your Password" >
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
import CollegeService from '../service/CollegeService'
export default {
 name: "popuplogin",
     components: {
     
       },
    data(){
        return{
             clg: {
              username: "",
              password: ""
            },
             
        }
    },
     mounted(){
        // this.getAllColleges();
    },
    methods:{
   
        findByUsernameAndPassword: function(){      
        return new Promise((resolve, reject) => {
            CollegeService.findByUsernameAndPassword(this.clg)
                .then(response => {
                    alert("login successfully!!");
                    this.clg.username ="";
                    this.clg.password ="";
                    
                    resolve(response);
                })
                .catch(err => {
                alert("login failed");
                    reject(err);
                });
       
        });
    }   
  } 
 }
</script>
    
