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
              <b-button variant="outline-success"  @click="login()">Submit</b-button>
              <b-button variant="outline-danger" class="mx-3" @click="resetForm()">Reset</b-button>
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
import AdminService from '../service/AdminService'
import CollegeService from '../service/CollegeService'
import StudentService from '../service/StudentService'
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
    methods:{
   
        login: function(){  
        if (this.selected==1){      
        return new Promise((resolve, reject) => {
         AdminService.loginAdmin(this.check) 
                .then(response => {
                    alert("login successfully!!");
                    localStorage.setItem('name', this.check.username)
                    localStorage.setItem('status','verified')
                    localStorage.setItem('role','adminlogin')
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
          CollegeService.loginCollege(this.check) 
                .then(response => {
                    alert("login successfully!!");
                    localStorage.setItem('name', this.check.username)
                    localStorage.setItem('status','verified')
                    localStorage.setItem('role','collegelogin')
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
        StudentService.loginStudent(this.check)   
                .then(response => {
                    alert("login successfully!!");
                   localStorage.setItem('name', this.check.username)
                   localStorage.setItem('status','verified')
                   localStorage.setItem('role','studentlogin')
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
    },
    resetForm() {
      this.check = {
      username: null,
      password: null    
     };
      this.$nextTick(() => {
      });
    },
       
  } 
  
  
 }

</script>
    
