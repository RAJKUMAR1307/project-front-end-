<template>
  <div>
    <div>    
       <NavBar />
     </div>
     <div>    
       <b-container>
         <h1>Colleges</h1>
        </b-container>
     </div>
     
     <div>
        <b-container>
            <b-table-simple responsive>      
              <b-thead head-variant="dark">
                <b-tr>
                  <b-th>ID</b-th>
                  <b-th>College Name</b-th>
                  <b-th>Username</b-th>
                  <b-th>Password</b-th>
                  <b-th>College Phone number</b-th>
                  <b-th>College postal address</b-th>
                  <b-th>Action</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="c in colleges" v-bind:key="c.id">
                  <b-td>{{c.id}}</b-td>
                  <b-td>{{c.collegeName}}</b-td>
                  <b-td>{{c.username}}</b-td>
                  <b-td>{{c.password}}</b-td>
                  <b-td>{{c.collegePhoneNumber}}</b-td>
                  <b-td>{{c.collegePostalAddress}}</b-td>     
                  <b-td>
                    <span><b-icon icon="pencil-fill" aria-hidden="true" @click="getCollege(c.id)" v-b-modal.editclg  ></b-icon></span>
                    <span> / </span>
                    <span><b-icon icon="trash-fill" aria-hidden="true" @click="deleteCollege(c.id)"></b-icon></span>                
                </b-td>     
                </b-tr>     
              </b-tbody>
            </b-table-simple><br><br><br><br>
            
            <!--popup start for College Register Update--> 
       <div >
       <b-modal id="editclg" title="Edit College" hide-footer>
          <b-form ref="form">
          
            <b-form-group  label="College Name:" >
                  <b-form-input   type="text"  v-model="college.collegeName">
                  </b-form-input>   
            </b-form-group><br>
            
            <b-form-group label="Username:" >
                 <b-form-input  type="text"  v-model="college.username">
                 </b-form-input> 
            </b-form-group><br>
             
            
            <b-form-group label="Password:" >
               <b-form-input type="password"  v-model="college.password">
                </b-form-input>
            </b-form-group><br>
            
         
            <b-form-group label="CollegePhoneNumber:">
               <b-form-input type="number" v-model="college.collegePhoneNumber">
               </b-form-input> 
            </b-form-group><br>
            
            
            <b-form-group label="CollegePostalAddress:"> 
               <b-form-textarea cols="35" rows="4" v-model="college.collegePostalAddress" >
               </b-form-textarea>
            </b-form-group><br>
            
            <div class="text-center">
              <b-button variant="outline-success" type="submit" @click="updateCollege()">Update</b-button>
            </div>
              
          
         </b-form>
       </b-modal>
    </div>
    <!--popup end for College Register--> 
           
            
            <div class="text-center">
                <b-button type="button" variant="outline-danger " class="mx-5"><router-link to="/adminlogin"> Back </router-link></b-button>
            </div><br>
              
        </b-container>
       </div>
     
     <div class="pt-5" sticky>
       <Footer />
     </div>
     
    
  
  </div>
</template>  

<script>

import NavBar from './Navbar'
import Footer from './Footer'
import CollegeService from '../service/CollegeService'
export default {
  name: 'deleteins',
  components:{
        NavBar,
        Footer,
        
  },
  data(){
        return{
            college: {            
              collegeName: "",
              username: "",
              password: "",
              collegePhoneNumber: "",
              collegePostalAddress: ""
            },
            colleges: '',
        }
    },
    mounted(){
        this.getAllColleges();
       // this.logout();
    },
    methods:{
        getAllColleges: function(){
            return new Promise((resolve, reject) => {
                CollegeService.getAllColleges()
                .then((response) => {                   
                    this.colleges = response.data;             
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });                     
    },
    deleteCollege: function(id){
            return new Promise((resolve, reject) => {
                CollegeService.deleteCollege(id)
                .then((response) => { 
                    alert ("colleges deleted successfully!!!!!");   
                    this.colleges = response.data; 
                    this.getAllColleges();            
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });              
     },
     getCollege: function(id){
            return new Promise((resolve, reject) => {
                CollegeService.getCollege(id)
                .then((response) => {       
                    this.college = response.data;                 
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });              
        },
        updateCollege: function(){           
        return new Promise((resolve, reject) => {
            CollegeService.updateCollege(this.college)
                .then(response => {
                alert ("colleges updated successfully!!!!!");
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        });        
    },
    // logout: function(){                                    
    //         localStorage.setItem('status','verified')
    //         }
             
        
     }
  }
</script>

<style scoped>
 
thead {
  text-align: center;
  padding: 3px;
  background-color: black;
  color: white;
}
table {
 border: 50px;
}
a{
   color: red;
   text-decoration: none!important;
   } 

</style>
