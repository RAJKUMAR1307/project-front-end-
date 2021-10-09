<template>
   <div>
       
       
       <div>    
         <NavBar />
       </div>
      
       
       <div>    
         <b-container>
           <h1>Faculty Management</h1><br>
         </b-container>
       </div>
       
       <div > 
       <b-container>
       <b-card bg-variant="dark" text-variant="white" title="Add Faculty">
         <b-card-text>
           With supporting text below as a natural lead-in to additional content.
         </b-card-text>
         <b-button href="#" variant="primary" v-b-modal.modal-4>Click here</b-button>
       </b-card><br>
       <b-card bg-variant="dark" text-variant="white" title="Update Faculty information">
         <b-card-text>
           With supporting text below as a natural lead-in to additional content.
         </b-card-text>
         <b-button href="#" variant="primary"  v-b-modal.modal-6 >Click here</b-button>
       </b-card><br>
       </b-container>
       </div> 
     
         
       <div class="text-center">          
           <b-button type="button" variant="outline-danger " class="mx-3"><router-link to="/collegelogin">Back</router-link></b-button>
       </div><br>
       
       
       
       <!--popup start for Add Faculty--> 
    <div >
       <b-modal id="modal-4" title="Add Faculty" hide-footer>
          <b-form ref="form" >
          
            <b-form-group label="Faculty name:" >
                  <b-form-input type="text" v-model="faculty.facultyName" placeholder="Enter your Faculty name">
                  </b-form-input> 
            </b-form-group><br>
            
            <b-form-group label="Qualification:" >
                 <b-form-input type="text" v-model="faculty.qualification" placeholder="Enter your Qualification">
                 </b-form-input>
            </b-form-group><br>
            
            <b-form-group label="Experience In Years:">
               <b-form-input type="number" v-model="faculty.experience" placeholder="Enter your Experience" >
               </b-form-input>
            </b-form-group><br>
            
            <b-form-group label="Skill set:">
                <b-form-input type="text" v-model="faculty.skillSet" placeholder="Enter your Skill set" >
                </b-form-input>
            </b-form-group><br>
            
         
            <div class="text-center">
              <b-button type="submit" variant="outline-success" @click="putFaculty()"> Submit</b-button>
              <b-button variant="outline-danger" class="mx-3" >Reset</b-button>
            </div>
         </b-form>
       </b-modal>
    </div>
    <!--popup end for Add Faculty--> 
    
     <!--popup start for  Faculty Table--> 
    <div >
       <b-modal id="modal-6" title="Faculty information" hide-footer>
       <b-container>
          <b-table-simple hover responsive >
            <b-thead head-variant="dark">
                <b-tr>
                  <b-th>ID</b-th>
                  <b-th>Faculty name</b-th>
                  <b-th>Qualification</b-th>
                  <b-th>Experience</b-th>
                  <b-th>Skill set</b-th>
                  <b-th>Action</b-th>
                </b-tr>
            </b-thead>
            <b-tbody>
                <b-tr v-for="f in facultys" v-bind:key="f.id">
                  <b-td>{{f.id}}</b-td>
                  <b-td>{{f.facultyName}}</b-td>
                  <b-td>{{f.qualification}}</b-td>
                  <b-td>{{f.experience}}</b-td>
                  <b-td>{{f.skillSet}}</b-td>
                  <b-td>
                    <span><b-icon icon="pencil-fill" aria-hidden="true" @click="getFaculty(f.id)" v-b-modal.modal-5></b-icon></span>
                    <span> / </span>
                    <span><b-icon icon="trash-fill" aria-hidden="true" @click="deleteFaculty(f.id)"></b-icon></span>                
                  </b-td>             
                </b-tr>     
              </b-tbody>
         </b-table-simple><br><br><br><br> 
         </b-container> 
       </b-modal>
    </div>
    <!--popup end for Faculty Table--> 
    
     <!--popup start for Update Faculty--> 
    <div >
       <b-modal id="modal-5" title="Update Faculty" hide-footer>
          <b-form ref="form" >
          
            <b-form-group label="Faculty name:">
                  <b-form-input  type="text" v-model="faculty.facultyName">
                  </b-form-input> 
            </b-form-group><br>
            
            <b-form-group label="Qualification:" >
                 <b-form-input  type="text" v-model="faculty.qualification">
                 </b-form-input>
            </b-form-group><br>
            
            <b-form-group label="Experience In Years:">
               <b-form-input type="number" v-model="faculty.experience">
               </b-form-input>
            </b-form-group><br>
            
            <b-form-group label="Skill set:">
                <b-form-input type="text" v-model="faculty.skillSet">
                </b-form-input>
            </b-form-group><br>
                   
            
            <div class="text-center">
              <b-button type="submit" variant="outline-success" @click="updateFaculty()">Update</b-button>
            </div>
         </b-form>
       </b-modal>
    </div>
    <!--popup end for Update Faculty--> 
       
       <div>  
         <Footer />
       </div>

   
  </div>
</template>

<script>


import NavBar from './Navbar'
import Footer from './Footer'
import FacultyService from '../service/FacultyService'
export default {
  name: 'facultymanagement',
  components:{
        NavBar,
        Footer
  },
  data(){
        return{
             faculty: {
              facultyName: "",
              qualification: "",
              experience: "",
              skillSet: ""
            },
              facultys: "",
        }
  },
  mounted(){
         this.getAllFacultys();
         this.logout(); 
    },
    methods:{
   
        putFaculty: function(){           
        return new Promise((resolve, reject) => {
            FacultyService.putFaculty(this.faculty)
                .then(response => {
                alert ("faculty registered successfully!!!!!");
                    this.faculty.facultyName ="";
                    this.faculty.qualification ="";
                    this.faculty.experience ="";
                    this.faculty.skillSet ="";
                    
                    
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        });        
    },
    getAllFacultys: function(){
            return new Promise((resolve, reject) => {
                FacultyService.getAllFacultys()
                .then((response) => {                       
                    this.facultys = response.data;   
                    console.log (this.facultys);          
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });              
        },
        deleteFaculty: function(id){
            return new Promise((resolve, reject) => {
                FacultyService.deleteFaculty(id)
                .then((response) => { 
                    alert ("Faculty deleted successfully!!!!!");   
                    this.facultys = response.data; 
                    this.getAllFacultys();            
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });              
        },
    getFaculty: function(id){
            return new Promise((resolve, reject) => {
                FacultyService.getFaculty(id)
                .then((response) => {       
                    this.faculty = response.data;                 
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
            });              
        },
        updateFaculty: function(){           
        return new Promise((resolve, reject) => {
            FacultyService.updateFaculty(this.faculty)
                .then(response => {
                alert ("Faculty updated successfully!!!!!");
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        });        
    },
        
       logout: function(){                                    
            localStorage.setItem('status','unverified')
            }      
              
    }   
 }            

</script>

<style scoped>
a{
   color: red;
   text-decoration: none!important;
   } 
</style>

